const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const Game = require('./Game.js');
const player = new Game();
var isGameOver = false;

window.addEventListener('load', function() {
  player.newGame();
  player.enemyShoot();
});

canvas.addEventListener('click', function(event) {
  player.shoot(event);
})

function animateMissiles(array) {
  array.forEach((missile) => {
    //create missile tail
    missile.missileTail();
    //draw array
    missile.move();
    missile.draw(context);
    missile.tail.forEach(seg => seg.draw(context));

    player.objectiveDetection(array);
  });
}

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (isGameOver) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.gameOver(context);
    return
  } else {
    player.drawObjects(context);
    animateMissiles(player.missiles);
    animateMissiles(player.enemyMissiles);
    player.detectCollisions();
  }

  if (player.cities.length === 0 && player.enemyMissiles.length === 0) {
    isGameOver = true;
  } else if (player.cities.length !== 0 && player.enemyMissiles.length === 0) {
    player.newGame();
    player.enemyShoot();
  }

  requestAnimationFrame(gameLoop);

}

//Listen for endOfRound = (thisLevel enemyWeaponCount = 0)
// function onNextLevel() {
  //Tally Points
  //change terrain color
  //replenish counter-missiles
  //add more enemy count
  //increment enemy missile speed
  //add extra city(s) if earned
// }

//Listen for GameOver
//Player city count = 0;
//if high score, ask for initials
//The End