const btn = document.querySelector('.prompt');
const clear = document.querySelector('.cleared');
const black = document.querySelector('.blackbtn');
const eraser = document.querySelector('.eraser');
const colorBtn = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');
let color = "black";

btn.addEventListener('mousedown', () => {
    chooseSize()
});

black.addEventListener('mousedown', () => {
    getColor('black');
});

eraser.addEventListener('mousedown', () => {
    getColor('white');
});

colorBtn.addEventListener('mousedown', () => {
    let changeColor = prompt("Please choose red,blue or green.")
    changeColor.toString;
    if(changeColor == 'red'){
        getColor(changeColor);
    }else if(changeColor == 'blue') {
        getColor(changeColor);
    }else if(changeColor == 'green') {
        getColor(changeColor);
    }else{
        alert("That color is invalid choose red ,blue or green.");
    }
});

clear.addEventListener('mousedown', () => {
    populate(32);
});

rainbow.addEventListener('mousedown', () => {
    getColor("random"); 
});


function baseSize() {
    let size = 32;
    populate(size);
}

function populate(size) {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;
    
    let amount = size * size;
    for(let i = 0;i < amount;i++) {
        let board = document.createElement('div');
        board.addEventListener('mouseover', colorSquare);
        board.style.backgroundColor = "white";
        container.insertAdjacentElement('beforeend', board);
    }
}

baseSize();

function colorSquare() {
    if(color === "random") {
        this.style.backgroundColor = (`hsl(${Math.random() * 360}, 100%, 50%)`); 
    }else {
        this.style.backgroundColor = color;
    }  
}

function getColor(choice) {
    color = choice;
}

function chooseSize() {
    const sC = prompt("Enter your size 1-100.");
    if(sC < 1 || sC > 100){
        baseSize();
        alert ("Please enter a number between 1-100\!");
    }else if (sC > 0 && sC < 101){
        populate(sC);
    }
}