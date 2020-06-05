var config = {
   apiKey: "AIzaSyC_O4rXOarwHq0lp1_bOmGo1dOtgzMJEeg",
   authDomain: "mydata-3050f.firebaseapp.com",
   databaseURL: "https://mydata-3050f.firebaseio.com",
   projectId: "mydata-3050f",
   storageBucket: "mydata-3050f.appspot.com",
   messagingSenderId: "518005177125"
 };
 firebase.initializeApp(config);
  
  
const FoodNicName = document.getElementById('fdncn');
const FoodFullName = document.getElementById('fdfln');
const Price = document.getElementById('price');
const Description = document.getElementById('description');
const filButton = document.getElementById('myfile');
const SubmitButton = document.getElementById('submit');


const roodRef = firebase.database().ref().child('KhanRastaurent');
//upload the data to firebase
SubmitButton.addEventListener('click',function(e){
	e.preventDefault();
	var file = filButton.files[0];
	var storageref = firebase.storage().ref('anue_pecture/'+ file.name);
	var  uploadTask = storageref.put(file);
	uploadTask.on('state_changed', function(snapshot){
  
  
	}, function(error) {
    // Handle unsuccessful uploads
    }, function() {
	// Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
	roodRef.child(FoodNicName.value).set({
		url:downloadURL,
		FoodNicName:FoodNicName.value,
		Food_FullNane:FoodFullName.value,
		Price:Price.value,
		Description: Description.value});
	
	  });
	});	
	

}); 
let main = document.getElementById("myTable");
let database = firebase.database();	  
//lagrer URL til bilder
let bildeurler = database.ref().child("KhanRastaurent");
// retrive data firebase to webpage	  
function visBilder(snap){
	let Picture = snap.val().url;
	let FoodNicName = snap.val().FoodNicName; 
	let Food_FullNane = snap.val().Food_FullNane;  
	let Price =snap.val().Price;
	let Description =snap.val().Description;
	
	//console.log(Picture);
	//console.log(price);
	
	main.innerHTML += `<tr class="row">
		<td  class="col-sm-2" align="center"><img src="${Picture}" alt="Alps" width="150" height="100"></td>
		<td  class="col-sm-1" align="center">${FoodNicName}</td>
		<td  class="col-sm-2" align="center">${Food_FullNane}</td>
		<td  class="col-sm-1" align="center">${Price}</td>
		<td  class="col-sm-4" align="center">${Description}</td>
		<td  class="col-sm-2" align="center">  <a href="#" class="btn btn-primary a-btn-slide-text" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" onClick="run()" >
        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        <span><strong>Edit</strong></span>            
    </a>
	    <a href="#" class="btn btn-primary a-btn-slide-text"data-toggle="modal" data-target="#delModal" onClick="run()">
       <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        <span><strong>Delete</strong></span>            
    </a></td>
	  </tr> `;
	   
}	
bildeurler.on("child_added", visBilder)


 function run() {
    var table = document.getElementById('myTable'); 
	var rows = table.getElementsByTagName("tr");
	for (i = 1; i < rows.length; i++) {
		row = table.rows[i];
		row.onclick = function(){
            var cell = this.getElementsByTagName("td");
			
				var delUserName = cell[1].innerHTML;
				var delUser = cell[2].innerHTML;
				
				//delete modal para
			document.getElementById("delU").innerHTML = "Are you sure, you want to remove user: " + delUser;
			
			//deleting a user
			$(document).on("click", "#delBtn", function(){
				console.log("wordjb");
				
				let userRef = database.ref().child('KhanRastaurent/' + delUserName);
				userRef.remove()
				
				location.reload();
			});
					
                document.getElementById("efdncn").value = cell[1].innerHTML;
				document.getElementById("efdfln").value = cell[2].innerHTML;
				document.getElementById("eprice").value = cell[3].innerHTML;
				document.getElementById("edescription").value = cell[4].innerHTML;
				
				const new_nicknameid = document.getElementById("efdncn").value;
				
				$(document).on("click", "#edtBtn", function(){
					var new_nickname = document.getElementById("efdncn").value;
				    var new_fullname = document.getElementById("efdfln").value;
					var new_price = document.getElementById("eprice").value;
					var new_description = document.getElementById("edescription").value;
					var new_picture = document.getElementById("emyfile").value;
				
					let roodRef = firebase.database().ref().child('KhanRastaurent');
					
				roodRef.child(new_nickname).update({
				
					'Price':new_price,
					'FoodNicName':new_nickname,
					'Food_FullNane':new_fullname ,
					'Description': new_description
					
				}) 
				location.reload();
			
                      });
		}
	}	 
	 
 }



