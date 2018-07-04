const highScoreInput = document.querySelector('.highscore');
const highscorePlayerName = document.querySelector('input');
const start = document.querySelector('.start-game');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();

window.addEventListener('load', function() {
  game.currentHighScore();
});

canvas.addEventListener('click', function(e) {
  game.shoot(e);
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
  game.enemyShoot();
  start.style.display = "none";
});

requestAnimationFrame(function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  game.gameLoop(highScoreInput, start, context);
  requestAnimationFrame(update);
});
