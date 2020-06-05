var config = {
   apiKey: "AIzaSyC_O4rXOarwHq0lp1_bOmGo1dOtgzMJEeg",
   authDomain: "mydata-3050f.firebaseapp.com",
   databaseURL: "https://mydata-3050f.firebaseio.com",
   projectId: "mydata-3050f",
   storageBucket: "mydata-3050f.appspot.com",
   messagingSenderId: "518005177125"
 };
 firebase.initializeApp(config);
 

 
  const FBSubmitButton = document.getElementById('fbsubmit');
	
 const roodRef = firebase.database().ref().child('Comments');
 
 //upload the data to firebase
FBSubmitButton.addEventListener('click',function(e){
	var Name= document.getElementById('name');
	var Email = document.getElementById('email');
	var Age = document.getElementById('age');
	var Person_daining = document.getElementById('dropdown');
	var Recommend; 
		document.getElementsByName("user-recommend").forEach(function(e) {
		  if (e.checked) {
			Recommend = e.value;
		  }
		})
	var Favourate= document.getElementById('most-like');
	var checkboxes = document.getElementsByName('prefer');
	var Prefer;
		for (var i=0, n=checkboxes.length;i<n;i++) {
			if (checkboxes[i].checked) {
				Prefer += ","+checkboxes[i].value;
			}
		}
	var FBComent = document.getElementById('comments');	
	console.log(Recommend);
	console.log(Favourate.value);
	console.log(Prefer);
	
 	roodRef.child(Name.value).update({
				
					'Name':Name.value,
					'Email':Email.value,
					'Age':Age.value,
					'Person_daining':Person_daining.value,
					'Recommend':Recommend,
					'Favourate':Favourate.value,
					'Prefer':Prefer,
					'FBComent': FBComent.value
					
				})  
}); 