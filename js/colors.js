const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ["red", "green", "yellow", "blue"];

myButton.addEventListener('click', changeColor);

function changeColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    image.src = "images/"
}
