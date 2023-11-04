const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');

const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score')
const note = document.querySelector('#note');
const start = document.querySelector('#start');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;
let noteTaker;
let gameStarted = false;

function randomSqure(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })

    let randomSqure = squares[Math.floor(Math.random() * 9) ]
    randomSqure.classList.add('mole');

    hitPosition = randomSqure.id;
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})
function moveMole(){
    
    timerId = setInterval(randomSqure, 500);
}


moveMole();

function countDown() {
currentTime--;
timeLeft.innerHTML = currentTime;

if(currentTime == 0){
    clearInterval(countDownTimerId);
    clearInterval(timerId)
    note.innerHTML = "GAME OVER ! YOUR FINAL SCORE IS : " + result;
    // alert('GAME OVER ! YOUR FINAL SCORE IS : ' + result)

}

}

let countDownTimerId = setInterval(countDown, 1000);

start.addEventListener('click', () => {
    if (!gameStarted) {
      gameStarted = true;
      result = 0;
      currentTime = 10;
      score.innerHTML = result;
      note.innerHTML = '';
      moveMole();
      countDownTimerId = setInterval(countDown, 1000);
    }
  });

