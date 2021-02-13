//Name of the file: firebaselogin.js
//This is the javascript file for the login page to store the data in firebase
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
  firebase.analytics();

  var anotherData = firebase.database().ref('Comparing');
  var previousData = firebase.database().ref('Users');

var loginUsername;
var loginPassword;

document.getElementById('login').addEventListener('submit',submitForm);

// function for submit form
function submitForm(e){
    e.preventDefault();

    // get values
    loginUsername = getInputVal('loginUsername');
    loginPassword = getInputVal('loginPassword');

    saveMessage();
    

    //console.log(name)
}

// functions to get form values

function getInputVal(id){
    return document.getElementById(id).value;

}

// save message to firebase

function saveMessage(){
    previousData.on('value', gotData, errData);
}

function gotData(data){

  var users = data.val();
  var username = Object.keys(users);

  var match;

    for (var i = 0; i < username.length; i++){
      var k = username[i];

      if (k == loginUsername && users[k].password == loginPassword){
          match = k;
      }

    }

    if (match == loginUsername){
      anotherData.child(loginUsername).set({
          name: users[match].name,
          email: users[match].email,
          password: users[match].password,
          gender: users[match].gender,
          work: users[match].work,
          site: users[match].site,
          location: users[match].location,
          skillOne: users[match].skillOne,
          skillTwo: users[match].skillTwo,
          skillThree: users[match].skillThree
      });
    }

    else{
      alert('Wrong username or password. Please enter your information again');
      location.href('finallogin.html');
    }

    next();

}

function next(){
  window.location.replace("profile.html");
}

function errData(err){
  console.log('Error!');
  console.log(err);
  alert('Please re-enter your information.');
}
