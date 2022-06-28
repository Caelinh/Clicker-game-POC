let box1 = document.getElementById('Box1');
let box2 = document.getElementById('Box2');
let box3 = document.getElementById('Box3');
let box4 = document.getElementById('Box4');
let displayScore = document.querySelector('span');
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
    // let newButton = document.createElement('div')
    this.obj = document.createElement('div'),
    gameSpace.appendChild(this.obj),
    this.obj.style.position = 'absolute',
        this.obj.style.top = `${pos1}%`,
        this.obj.style.right = `${pos2}%`,
        this.obj.style.left = `${pos3}%`,
        this.obj.style.bottom = `${pos4}%`,
        setTimeout(() => {
            this.obj.remove()
        }, 2000);
        this.obj.addEventListener('click',function(event){
            score += 1;
            displayScore.textContent= score;
            event.target.remove()
        
    })
    
}


function disappear(element) {
    element.remove();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function createButton() {
    let top = getRandomInt(0, 91.5);
    let right = getRandomInt(0, 98);
    let left = getRandomInt(0, 98);
    let bottom = getRandomInt(0, 98);
    let button = new Button(top, right, left, bottom)
    console.log(button);
}

setInterval(createButton, 200)