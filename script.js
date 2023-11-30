const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startbutton = document.querySelector('.startbutton');
const restartbutton = document.querySelector('.restartbutton');
var gameOver = document.querySelector('.game-over') 
var gameBoard = document.querySelector('.game-board') 

function restartar(){
    if(restartbutton.style.display ='block'){
        gameBoard.style.display = 'block'
        restartbutton.style.display= 'none'

    }
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(pipePosition);
    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 95){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '40px';

        clearInterval(loop);
        if(gameOver.style.display ='none'){
            gameOver.style.display = 'flex'
            gameBoard.style.display= 'none'

        }
        
    }
}, 10);



document.addEventListener('keydown', jump);