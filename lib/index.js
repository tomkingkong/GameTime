//DEBUGGER ON SCREEN ---------------------
const debug = document.querySelector('.debug');

// ---------------------------------------

const canvas = document.querySelector('#game');
const start = document.querySelector('.start-game');
const highScoreInput = document.querySelector('.highscore');
const highscorePlayerName = document.querySelector('input');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();

window.addEventListener('load', function() {
  game.currentHighScore();
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

canvas.addEventListener('click', function(e) {
  game.shoot(e);
});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  debug.innerHTML = 
  `
   <p>Score: ${game.score}</p>
   <p>Level: ${game.lvl}</p>
   <p>Enemy Count: ${game.enemyMissiles.length}</p>
   <p>Player Missiles: ${game.playerMissileCount}</p>
   <p>Lives: ${game.cities.length}</p>
   <p>High Score: 
   </br>Name: ${game.highScore.playerName}
   </br>Level: ${game.highScore.level}
   </br>Score: ${game.highScore.score}</p>
   `;
  
  if (game.isGameOver) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.gameOver(context, highScoreInput);
    start.style.display = "block";
  } else {
    game.drawObjects(context);
    game.animateMissiles(game.missiles, context);
    game.animateMissiles(game.enemyMissiles, context);
    game.detectCollisions();
    game.drawText(context);
  }

  if (game.cities.length === 0 && game.enemyMissiles.length === 0) {
    game.isGameOver = true;
  } else if (game.cities.length !== 0 && game.enemyMissiles.length === 0) {
    game.lvl++;
    game.newGame();
    game.enemyShoot();
  }
  requestAnimationFrame(gameLoop);
});