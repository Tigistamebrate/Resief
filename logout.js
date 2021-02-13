//Name of the file: logout.js
//This is the javascript file to logout for the profile page
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

  //Referemce messages collection
  var removeData = firebase.database().ref('Comparing');

  document.getElementById('top').addEventListener('submit',removeit);

// function for submit form
function removeit(){

  removeData.remove();

  window.location.replace("index.html");

}
