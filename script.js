'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ No number!`;
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct number!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`.message`).textContent = `📈 Too high!`;
    } else {
      document.querySelector(`.message`).textContent = `💥 You lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`.message`).textContent = `📈 Too low!`;
    } else {
      document.querySelector(`.message`).textContent = `💥 You lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
