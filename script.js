'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = createSecretNumber();
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score >= 1) {
      score--;
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High!';
      } else {
        document.querySelector('.message').textContent = 'Too Low!';
      }
    }

    if (!score) {
      document.querySelector('.message').textContent = 'You Lost The Game!!';
    }

    clearInputField();
  }
  document.querySelector('.score').textContent = score;

  if (score === 0) {
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = createSecretNumber();
  console.log(secretNumber);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  clearInputField();
});

function createSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function clearInputField() {
  document.querySelector('.guess').value = '';
}
