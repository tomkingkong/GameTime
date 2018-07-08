const highScoreInput = document.querySelector('.highscore');
const highscorePlayerName = document.querySelector('input');
const start = document.querySelector('.start-btn');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();

window.addEventListener('load', game.getCurrentHighScore());

canvas.addEventListener('click', function(event) {
  game.playerShoot(event);
});

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 80) { //press P
    game.togglePause();
  }
});

highScoreInput.addEventListener('submit', function(event) {
  event.preventDefault();
  game.setHighScore(highscorePlayerName);
  highScoreInput.style.display = 'none';
});

start.addEventListener('click', function() {
  if (highScoreInput.style.display === 'block') {
    return false;
  }
  game.isGameOver = false;
  game.newGame(context);
  start.style.display = 'none';
});

requestAnimationFrame(function update() {
  game.gameLoop(highScoreInput, start, context, canvas);
  requestAnimationFrame(update);
});

