const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const GamePiece = require('./GamePiece.js');
const Weapon = require('./Weapon.js');
const Target = require('./Target.js');
const Game = require('./Game.js');
const player = new Game();
const terrain = new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);
var isGameOver = false;

window.addEventListener('load', function() {
  player.newGame();
});

canvas.addEventListener('click', shoot);

function findBattery(event) {
  let x;

  if ( event.layerX < 200 ) {
    x = 30;
  } else if ( event.layerX > 400 ) {
    x = 570
  } else {
    x = 300
  }
  return x
}

function shoot(event) {
  var xBat = findBattery(event);
  var missileTarget = new Target((event.layerX), (event.layerY), 10, 10, 'rgb(200, 250, 25)', 0, 0);
  var counterMissile = new Weapon(xBat, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 0, {x: xBat, y: 490}, {x: event.layerX, y: event.layerY}, 10, true)
  
  player.targets.push(missileTarget);
  
  player.missiles.push(counterMissile);
}

function drawExplosions() {
  player.explosions.forEach(explosion => {
    explosion.count--;
    if ( explosion.count === 0) {
      player.explosions.shift(explosion);
    }
    explosion.draw(context)
  });
}

function explosion(explosion) {
  var explosion = new Target(explosion.x, explosion.y, 50, 50, 'rgb(255, 100, 0)', 0, 0, 0, true);
  
  player.explosions.push(explosion);
}

function animate() {
  player.missiles.forEach((missile) => {
    //create missile tail
    var segment = new Weapon(missile.x, missile.y, missile.width, missile.height, missile.color, 0, 0, 0, {x: 0, y: 0}, {x: 0, y: 0}, 0, true);
    
    missile.tail.push(segment);
    //draw missiles
    missile.tail.forEach(seg => seg.draw(context));
    missile.draw(context);
    //missile path
    missile.fires();

    //COLLISION DETECTION = EXPLOSION
    player.targets.forEach(target => {
      if ( target.isCollidingWith(missile) ) {
        player.targets.shift(target) && player.missiles.shift(missile);
        explosion(missile);
      }
    });

    player.explosions.forEach(explosion => {
      // if ( explosion.isCollidingWith(missile) && missile.isEnemy === true ) {
      //   missiles.shift(missile);
      // }
      if ( explosion.count === 0) {
        player.explosions.shift(explosion);
      }
    });
  });
}

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (isGameOver === true) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    terrain.draw(context);
    player.drawObjects(context);
    // staticTargets();
    drawExplosions();
    animate();
  }

  if (player.cities.length === 0 && player.enemyWeaponCount === 0) {
    isGameOver = true;
  }

  // if (player.enemyWeaponCount === 0) {
  //   player.nextLevel();
  // }

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


console.log(context)