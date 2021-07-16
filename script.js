'use strict';
//textContent chooses text inside html tags only
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct answer! 🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//to get the input element with DOM user .value instead of .textContent
document.querySelector('.guess').value = '9';
console.log(document.querySelector('.guess').value);
*/

//generating random number between 1 and 20
let random = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
//implementing click event with addEventListener which takes two params: event and function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('🛑 NO NUMBER');
    //when player wins
  } else if (guess === random) {
    displayMessage('Correct answer! 🎉');
    document.querySelector('.number').textContent = random;
    //making whole body background color green. use camel case when property name consists of two words. specify the value in quotes
    document.querySelector('body').style.backgroundColor = '#60b347';
    //making random number wider
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== random) {
    if (score > 1) {
      displayMessage(guess < random ? '📉 too low' : '📈 too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😟 You Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
