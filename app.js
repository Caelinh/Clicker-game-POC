let box1 = document.getElementById('Box1');
let box2 = document.getElementById('Box2');
let box3 = document.getElementById('Box3');
let box4 = document.getElementById('Box4');
let displayScore = document.querySelector('p');
let gameSpace = document.getElementById('Game');

// box1.addEventListener('click',changeColor);
// box2.addEventListener('click',hide);
let score = 0;

function changeColor() {
    this.style.backgroundColor = 'blue';
    score += 1;
    displayScore.textContent = score;

}
function hide() {
    this.style.visibility = 'hidden';
}

function Button(pos1, pos2, pos3, pos4) {
    let newButton = document.createElement('div')
    gameSpace.appendChild(newButton)
    newButton.style.position = 'absolute',
        newButton.style.top = `${pos1}px`,
        newButton.style.right = `${pos2}px`,
        newButton.style.left = `${pos3}px`,
        newButton.style.bottom = `${pos4}px`
}


Button.prototype.disappear = function(){
    this.style.visibility = 'hidden';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function createButton() {
    let top = getRandomInt(0, 500);
    let right = getRandomInt(0, 1000);
    let left = getRandomInt(0, 1000);
    let bottom = getRandomInt(0, 500);
    let button = new Button(top,right,left,bottom)
}


setInterval(createButton, 1000);