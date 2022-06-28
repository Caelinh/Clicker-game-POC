let box1 = document.getElementById('Box1');
let box2 = document.getElementById('Box2');
let box3 = document.getElementById('Box3');
let box4 = document.getElementById('Box4');
let displayScore = document.getElementById('score');
let gameSpace = document.getElementById('Game');
let startScreen = document.getElementById('welcome');
let startButton = document.getElementById('start');

// box1.addEventListener('click',changeColor);
// box2.addEventListener('click',hide);


startButton.addEventListener('click',function(event){
    startScreen.style.visibility = 'hidden';
    let start = setInterval(createButton, 200);
    timer();
    setTimeout(() => {
        clearInterval(start);
    }, 30000);;

});
//set Timer length here
let timerNum = 30;
function timer(){
   
    let timerInterval = setInterval(() => {
        timerNum -- ;
        let timerEl = document.getElementById('timer');
        timerEl.textContent = timerNum;
        console.log(timerNum);
        if (timerNum === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
  
}

function stopGame(game){
    clearInterval(game);
}

let score = 0;

function changeColor() {
    this.style.backgroundColor = 'blue';
    score += 1;
    displayScore.textContent = score;

}
function hide() {
    this.style.visibility = 'hidden';
}
//button constructor
function Button(pos1, pos2, pos3, pos4) {
    // let newButton = document.createElement('div')
    this.obj = document.createElement('div'),
    this.obj.classList.add('gamePiece')
    gameSpace.appendChild(this.obj),
    this.obj.style.position = 'absolute',
        this.obj.style.top = `${pos1}%`,
        this.obj.style.right = `${pos2}%`,
        this.obj.style.left = `${pos3}%`,
        this.obj.style.bottom = `${pos4}%`,
        //this decides how fast the buttons disappear
        setTimeout(() => {
            this.obj.remove()
        }, 1000);
        this.obj.addEventListener('click',function(event){
            score += 1;
            displayScore.textContent= score;
            event.target.remove()
        
    })
    
}
function disappear(element) {
    element.remove();
}
// Generating random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// crating button function
function createButton() {
    let top = getRandomInt(0, 91.5);
    let right = getRandomInt(0, 91.5);
    let left = getRandomInt(0, 91.5);
    let bottom = getRandomInt(0, 98);
    let button = new Button(top, right, left, bottom)
}

