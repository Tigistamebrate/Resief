//Name of the file: protectpassword.js
//This is the javascript file for the login page to show the protect the password bar
// Last updated: June 9, 2020
function signupFunction() {
  var x = document.getElementById("signupPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function loginFunction() {
  var x = document.getElementById("loginPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}