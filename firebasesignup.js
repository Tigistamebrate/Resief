//Name of the file: firebasesignup.js
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Referemce messages collection
  var saveData = firebase.database().ref('Users');

  document.getElementById('signup').addEventListener('click',signupForm);

// function for submit form
function signupForm(){
    // get values
    var name = getInputVal('name');
    var username = getInputVal('signupUsername');
    var email = getInputVal('signupEmail');
    var password = getInputVal('signupPassword');
    
    saveData.child(username).set({
        name: name,
        email: email,
        password: password,
        gender: "Enter gender",
        work: "Enter Work",
        site: "Enter Site Link",
        location: "Enter Location",
        skillOne: "Enter Your First Skill",
        skillTwo: "Enter Your Second Skill",
        skillThree: "Enter Your Third Skill"
    });

    //console.log(name)
}

// functions to get form values

function getInputVal(id){
    return document.getElementById(id).value;

}

// save message to firebase

// function saveMessage(name, username, email, password){
//   alert('save message');
//     saveData.child(username).set({
//         name: name,
//         email: email,
//         password: password,
//         gender: "Enter gender",
//         work: "Enter Work",
//         site: "Enter Site Link",
//         location: "Enter Location",
//         skillOne: "Enter Your First Skill",
//         skillTwo: "Enter Your Second Skill",
//         skillThree: "Enter Your Third Skill"
//     });

// }
