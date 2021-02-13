// Name of the file: contact1.mjs
//This is the file for the contact us page to connect to firebase database
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
//Reference messages collection
var messagesRef = firebase.database().ref('messages');


// listen fo form submit
document.getElementById(contact-form).addEventListener('submit',submit_form);
//
function submit_form(e){
    e.preventDefault()
//get values
    var name1 = hetInoutVal('name1')
    var name2 = hetInoutVal('name2')
    var email = hetInoutVal('email')
    var message = hetInoutVal('message')

    console.log(name)

    saveMessage(name1,name2,email,message)


}

//function to get form values 
function getInputVal(id){
    return document.getElementById(id).value:
}

//save message
function saveMessage(name1,name2,email,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({

        name1: name1,
        name2: name2,
        email: email,
        message: message


    })


}