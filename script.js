'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  //When there is no input
  if (!guess) {
    displayMessage(`⛔ No number!`);
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    highScore = score;
    if (Number(document.querySelector(`.highscore`).textContent) < highScore) {
      document.querySelector(`.highscore`).textContent = highScore;
    }

    console.log(highScore);

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(`.score`).textContent = score;
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📈 Too low!`);
    } else {
      displayMessage(`💥 You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  score = 20;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';
  displayMessage(`Start guessing...`);
});
