const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const GamePiece = require('./GamePiece.js');
var Weapon = require('./Weapon.js');
var Target = require('./Target.js');
var Game = require('./Game.js');
var isGameOver = false;
var player = new Game();
var terrain = new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);

window.addEventListener('load', function() {
  player.newGame();
});

canvas.addEventListener('click', shoot);


function shoot(event) {
  var missileTarget = new Target((event.layerX), (event.layerY), 10, 10, 'rgb(200, 250, 25)', 0, 0);
  player.targets.push(missileTarget);
  var counterMissile = new Weapon(300, 520, 5, 5, 'rgb(0, 200, 200)', 0, 0, 0, {x:300, y:520}, {x:event.layerX, y:event.layerY}, 10, true)
  player.missiles.push(counterMissile);
}

function staticTargets() {
  //Handle Targets
  player.targets.forEach((target) => {
    //if target.isExplosion == true, draw ctx.arc
    target.draw(context);
  });
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
    var segment = new Weapon(missile.x, missile.y, missile.width, missile.height, missile.color, 0, 0, 0, {x:0, y:0}, {x:0, y:0}, 0, true);
    missile.tail.push(segment);
    //draw missiles
    missile.tail.forEach(seg => seg.draw(context));
    missile.draw(context);
    //missile path
    missile.firing();

    //COLLISION DETECTION = EXPLOSION
    player.targets.forEach(target => {
      if ( target.isCollidingWith(missile) ) {
        player.targets.shift(target) && player.missiles.shift(missile);
        explosion(missile);
      }
    });

    player.explosions.forEach(explosion => {
      // if ( explosion.isCollidingWith(missile) ) {
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
  if (player.cities.length === 0){
    isGameOver = true;
  }
  if (isGameOver === true){
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    terrain.draw(context);
    player.drawPlayerBases(context);
    staticTargets();
    drawExplosions();
    animate();
  }

  // if (player.enemyWeaponCount === 0) {
  //   player.nextLevel();
  // }

  requestAnimationFrame(gameLoop);
};

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