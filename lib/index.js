const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const GamePiece = require('./GamePiece.js');
const Weapon = require('./Weapon.js');
const Target = require('./Target.js');
const Game = require('./Game.js');
const player = new Game();
const terrain = new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);
var isGameOver = false;
var playerTargets = [60, 135, 210, 360, 430, 50, 30, 300, 570];

window.addEventListener('load', function() {
  player.newGame();
  enemyShoot();
});

canvas.addEventListener('click', shoot);

function randomPos(min, max) {
  var minimum = Math.ceil(min);
  var maximum = Math.floor(max);

  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}


function enemyShoot() {
  //separation of enemy missile/target array creation
  //and firing missiles
  for (var i = 0; i < player.enemyWeaponCount; i++) {
    var enemyPos1 = { x: randomPos(10, 590), y: randomPos(-800, -100) };
    var enemyPos2 = { x: playerTargets[ randomPos(0, 8) ], y: 510 };
    var enemyTarget = 
    new Target(enemyPos2.x, enemyPos2.y, 10, 10, 'rgba(0, 0, 0, 0)', 0, 0);
    var enemyMissile = 
    new Weapon(enemyPos1.x, enemyPos1.y, 5, 5, 'rgb(255, 0, 0)', 0, 0, 0, enemyPos1, enemyPos2, 0.75, true)

    player.enemyMissiles.push(enemyMissile);
    player.enemyTargets.push(enemyTarget);
  }
}

function findBattery(event) {
  let xPos;

  event.layerX < 200 ? xPos = 30
    : event.layerX > 400 ? xPos = 570
      : xPos = 300;
  return {x: xPos, y: 490}
}

function shoot(event) {
  //creating missiles (not firing them)
  var batteryPos = findBattery(event);
  var mousePos = {x: event.layerX, y: event.layerY};
  var minY = 435;
  var missileTarget;
  var counterMissile;

  if (mousePos.y < 438) {
    missileTarget = 
    new Target(mousePos.x, mousePos.y, 10, 10, 'rgb(200, 250, 25)', 0, 0);
    counterMissile = 
    new Weapon(batteryPos.x, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 12, batteryPos, { x: mousePos.x + 5, y: mousePos.y + 5}, 10, true);
  } else {
    missileTarget = 
    new Target(mousePos.x, minY, 10, 10, 'rgb(200, 250, 25)', 0, 0);
    counterMissile = 
    new Weapon(batteryPos.x, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 12, batteryPos, { x: mousePos.x + 5, y: minY + 5}, 10, true);
  }

  player.targets.push(missileTarget);
  player.missiles.push(counterMissile);
}

function explode(weapon) {
  var explosion = 
  new Target(weapon.x, weapon.y, 50, 50, 'rgb(255, 100, 0)', 0, 0, 0, true);
  
  player.explosions.push(explosion);
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

function animateMissiles(array) {
  array.forEach((missile) => {
    //create missile tail
    missile.missileTail();
    //draw array
    missile.move();
    missile.draw(context);
    missile.tail.forEach(seg => seg.draw(context));

    //Kill player missile when it reaches it's destination
    var posDiffY = Math.abs( missile.y - missile.p2.y);
  
    if ( posDiffY < 10 ) {
      array.splice(array.findIndex(missile => missile), 1);
      player.targets.splice(array.findIndex(index => index), 1);
      explode(missile);
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


requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (isGameOver === true) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    terrain.draw(context);
    player.drawObjects(context);
    drawExplosions();
    animateMissiles(player.missiles);
    // animateMissiles(player.enemyMissiles);
  }

  if (player.cities.length === 0 && player.enemyWeaponCount === 0) {
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