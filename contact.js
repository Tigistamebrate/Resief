//Name of the file: contact.js
//This is the javascript page for the contact us page
// Last updated: June 9, 2020
const text = document.querySelector(".animation");
const strText = text.textContent;
const splitText = strText.split("")
text.textContent = ""
for (let i = 0; i < splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let charecter = 0;
let timer = setInterval(onTick, 50)

function onTick(){
  const span = text.querySelectorAll('span')[charecter];
  span.classList.add('fade');
  charecter++
  if(charecter === splitText.length){
    StereoPannerNode();
    return;
  }
}

function stop(){
  clearInterval(timer);
  timer = null;
}
// sourse https://www.youtube.com/watch?v=GUEB9FogoP8&t=658s
