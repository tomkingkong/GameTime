const highScoreInput = document.querySelector('.highscore');
const highscorePlayerName = document.querySelector('input');
const start = document.querySelector('.start-btn');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();

window.addEventListener('load', game.currentHighScore());

canvas.addEventListener('click', function(e) {
  game.shoot(e);
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode === 80) {
    game.togglePause();
  }
});

highScoreInput.addEventListener('submit', function(e) {
  e.preventDefault();
  game.setHighScore(highscorePlayerName);
  highScoreInput.style.display = "none";
});

start.addEventListener('click', function(e) {
  e.preventDefault();
  game.isGameOver = false;
  game.newGame();
  start.style.display = "none";
});

requestAnimationFrame(function update() {
  if (game.paused) {
    context.fillStyle = 'rgb(255, 0, 0)';
    context.font = '48px serif';
    context.fillText('PAUSED', 195, 300);
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.gameLoop(highScoreInput, start, context);
  }
  requestAnimationFrame(update);
});

