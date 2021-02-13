//Name of the file: sketch.js
//This is the javascript page for the home page
// Last updated: June 9, 2020
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1wJHmKyeFiUIEvlKM5wvYfVnGA5Zn2fE",
  authDomain: "resief-b349b.firebaseapp.com",
  databaseURL: "https://resief-b349b.firebaseio.com",
  projectId: "resief-b349b",
  storageBucket: "resief-b349b.appspot.com",
  messagingSenderId: "853544147180",
  appId: "1:853544147180:web:51ea906ff7989468fdedc9",
  measurementId: "G-XEFBCWEKGB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Reference messages collection
var postingsRef = firebase.database().ref('Postings');



// listen for form submit
document.getElementById('posting').addEventListener('submit',submitForm);

// function for submit form
function submitForm(e){
  e.preventDefault();

  // get values
  var message = getInputVal('message');

  saveMessage(message);

  //show alert
  document.querySelector('.alert').style.display = 'block';

  //hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  //clearing form
  document.getElementById('posting').reset();

}

// functions to get form values

function getInputVal(id){
  return document.getElementById(id).value;

}
// save message to firebase

function saveMessage(message){
  var newPostingsRef = postingsRef.push();
  newPostingsRef.set({
      message: message
  });
}

// End of firebase whooohooo

//Begin js for the pop up

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


//function for the pop up
  //function for the btn
btn.onclick = function() {
  modal.style.display = "block";
}

  //function for span
span.onclick = function() {
  modal.style.display = "none";
  window.location.replace("map.html");
}
  //fucntion for the exit button
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}
// End JS for the popup
