//Name of the file: pulldata.js
//This is the javascript page for the profile page
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


  var retrieveData = firebase.database().ref('Comparing');
  retrieveData.on('value', gotData, errData);

function gotData(data){

  var users = data.val();
  var username = Object.keys(users);
  var info = username[0];

  document.getElementById("userName").innerHTML = users[info].name;
  document.getElementById("emailID").innerHTML = users[info].email;

  document.getElementById("sitelink").innerHTML = users[info].site;
  document.getElementById("gender").innerHTML = users[info].gender;
  document.getElementById("work").innerHTML = users[info].work;
  document.getElementById("location").innerHTML = users[info].location;

  
  document.getElementById("skillOne").innerHTML = users[info].skillOne;
  document.getElementById("skillTwo").innerHTML = users[info].skillTwo;
  document.getElementById("skillThree").innerHTML = users[info].skillThree;

}

function errData(err){
  console.log('Error!');
  console.log(err);
}
