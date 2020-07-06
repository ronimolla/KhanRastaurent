var config = {
   apiKey: "AIzaSyC_O4rXOarwHq0lp1_bOmGo1dOtgzMJEeg",
   authDomain: "mydata-3050f.firebaseapp.com",
   databaseURL: "https://mydata-3050f.firebaseio.com",
   projectId: "mydata-3050f",
   storageBucket: "mydata-3050f.appspot.com",
   messagingSenderId: "518005177125"
 };
 firebase.initializeApp(config);
 
 let Manue = document.getElementById("manue");
 
 
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
	console.log(Price);
	
	  
	  Manue.innerHTML +=`<div class="columnk">
  <div class ="card" >
							<img src="${Picture}" class = "img" alt="Alps" >
							<h1> ${Food_FullNane}</h1>
							<p class="price">RM:${Price}</p>
							<p> ${Description}</p>
								
						</div></div>`;
	   
}	
bildeurler.on("child_added", visBilder)




