//DEBUGGER ON SCREEN ---------------------
const debug = document.querySelector('.debug');

// ---------------------------------------

const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game();
var isGameOver = false;

window.addEventListener('load', function() {
  game.newGame();
  game.enemyShoot();
});

canvas.addEventListener('click', function(event) {
  game.shoot(event);
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
   `;
  
  if (isGameOver) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.gameOver(context);
  } else {
    game.drawObjects(context);
    game.animateMissiles(game.missiles, context);
    game.animateMissiles(game.enemyMissiles, context);
    game.detectCollisions();
  }

  if (game.cities.length === 0 && game.enemyMissiles.length === 0) {
    isGameOver = true;
  } else if (game.cities.length !== 0 && game.enemyMissiles.length === 0) {
    game.lvl++;
    game.newGame();
    game.enemyShoot();
  }
  requestAnimationFrame(gameLoop);
});


// function onNextLevel() {
//Tally Points
//change terrain color
//replenish counter-missiles
//add extra city(s) if earned
// }

//Listen for GameOver
//if high score, ask for initials
//The End