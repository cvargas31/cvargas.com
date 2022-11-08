const typedTextSpan = document.querySelector(".typed-text")

const textArray = ["Frontend Developer" ]
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length){
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay)
  }
}


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250)
})