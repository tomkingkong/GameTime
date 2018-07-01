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

    //Kill player missile when it reaches it's destination
    const posDiffY = Math.abs( missile.y - missile.p2.y);
  
    if ( posDiffY < 5 ) {
      array.splice(array.findIndex(missile => missile), 1);
      player.targets.splice(array.findIndex(index => index), 1);
      player.explode(missile);
    }

    //COLLISION DETECTION = EXPLOSION
    // player.targets.forEach(target => {
    //   if ( target.isCollidingWith(missile) ) {
    //     player.targets.splice(player.targets.findIndex(index => index), 1);
    //     array.splice(array.findIndex(index => index), 1);
    //     explode(missile);
    //   }
    // });

    // player.explosions.forEach(explosion => {
    //   // if ( explosion.isCollidingWith(missile) && missile.isEnemy === true ) {
    //   //   array.shift(missile);
    //   // }
    //   if ( explosion.count === 0) {
    //     player.explosions.shift(explosion);
    //   }
    // });
  });
}
function animateEnemyMissiles(array) {
  array.forEach((missile) => {
    //create missile tail
    missile.missileTail();
    //draw array
    missile.move();
    missile.draw(context);
    missile.tail.forEach(seg => seg.draw(context));
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
    player.generateTerrain(context);
    player.drawObjects(context);
    animateMissiles(player.missiles);
    animateMissiles(player.enemyMissiles);
    player.detectCollision();
  }

  if (player.cities.length === 0 && player.enemyMissiles.length === 0) {
    isGameOver = true;
  }

  if (player.enemyWeaponCount === 0) {
    // player.nextLevel();
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