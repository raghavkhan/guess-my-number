'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let rand = Math.trunc(Math.random() * 20) + 1;
let sco = 20;
let highsco = 0;

const vody = document.querySelector('body');
const again = document.querySelector('.again');
const inputt = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const questionMark = document.querySelector('.number');

const checking = function() {

    sco--;
    
    if (!Number(inputt.value))
{ message.textContent = 'No Number';
  score.textContent = sco ;
}
else if (Number(inputt.value) !== rand)
{
    if(sco < 1)
    {
        message.textContent = 'game over';
        vody.style.backgroundColor = 'red';
        score.textContent = sco;
        highScore.textContent = highsco;
    }
    else if(sco >= 1 )
    {
message.textContent = Number(inputt.value) > rand ? 'Too High' : 'Too Low';
score.textContent = sco;    
}
}
else 
{
    message.textContent = 'Correct Number';
    vody.style.backgroundColor = 'green';
    score.textContent = sco ;
    questionMark.textContent = inputt.value;
    if(sco > highsco)
    {
        highsco = sco;
        highScore.textContent = sco;
    }
}

}

const resetAgain = function() {
    message.textContent = 'Start Guessing...';
    questionMark.textContent = '?';
    score.textContent = sco = 20;
    vody.style.backgroundColor = '#222';
    inputt.value = '';
    rand = Math.trunc(Math.random() * 20) + 1;
}

check.addEventListener('click', checking) || document.addEventListener('keydown',function(e)
{ 

 if(e.key === 'Enter')
checking(); } )
again.addEventListener('click', resetAgain);
