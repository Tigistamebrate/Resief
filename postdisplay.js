//Name of the file: postdisplay.js
//This is the javascript page for the post feature in the home page
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

var userDataRef = firebase.database().ref("Postings").orderByKey();
var name;

userDataRef.once("value")
    .then(function(snapshot){
        var post = '';
        if(snapshot.exists()){
            snapshot.forEach(function(childSnapshot){
                //intializes fields into various variables
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                var entry_post = childSnapshot.val().message;

                var usernameRef= firebase.database().ref('Comparing');
                usernameRef.on('value', gotData);

                function gotData(data){
                    var username = data.val();
                    //console.log(username);
                    var keys = Object.keys(username);
                    name = username[keys[0]].name;

                }

                //console.log(childData)
                //formats data into HTML code


                post += '<div class = "postcover"> <div class= "top"><img id = "blank_pic" src = "blank.png"><p id="test">'+ name+ '</p></div><hr class ="divider"><p class = "description" >'+ entry_post +'</p><hr class ="divider"><div class ="bottom"><span class = "img1"><p><img src = "up.png">Uplift</p></span><span class = "img2"><p><img src ="comment.png">Comment</p></span><span class = "img3"><p><img src = "share.png">Share</p></span></div>';
                post += '</div>';

                // sends HTML code to HTML code
                document.getElementById("done").innerHTML = post;
            });
            
            

        }
    });