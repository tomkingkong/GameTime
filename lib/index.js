const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const GamePiece = require('./GamePiece.js');
var Weapon = require('./Weapon.js');
var Target = require('./Target.js');
var isGameOver = false;
var terrain = new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);

// var missile1 = new Weapon(300, 520, 10, 10, 'rgb(0, 200, 200)', 0, 0, 0, {x:300, y:520}, {x:200, y:200}, 2);
// var target1 = new Weapon(200, 400, 200, 40, 'rgb(0, 200, 0)', 0, 0);

var missiles = [];
var targets = [];
var explosions = [];

canvas.addEventListener('click', shoot);

function shoot(event) {
  var missileTarget = new Target((event.layerX), (event.layerY), 10, 10, 'rgb(200, 250, 25)', 0, 0);
  targets.push(missileTarget);
  var counterMissile = new Weapon(300, 520, 5, 5, 'rgb(0, 200, 200)', 0, 0, 0, {x:300, y:520}, {x:event.layerX, y:event.layerY}, 6, true)
  missiles.push(counterMissile);
}


function staticTargets() {
  //generate terrain
  terrain.draw(context);
  //Handle Targets
  targets.forEach((target) => {
    //if target.isExplosion == true, draw ctx.arc
    target.draw(context);
  });
}

function drawExplosions() {
  explosions.forEach(explosion => {
    explosion.count--;
    if ( explosion.count === 0) {
      explosions.shift(explosion);
    }
    explosion.draw(context)
  });
}

function explosion(explosion) {
  var explosion = new Target(explosion.x, explosion.y, 50, 50, 'rgb(255, 100, 0)', 0, 0, 0, true);
  explosions.push(explosion);
}

function animate() {
  missiles.forEach((missile) => {
    var segment = new Weapon(missile.x, missile.y, missile.width, missile.height, missile.color, 0, 0, 0, {x:0, y:0}, {x:0, y:0}, 0, true);
    missile.tail.push(segment);
    missile.tail.forEach(seg => seg.draw(context));
    missile.draw(context);
    missile.firing();

    targets.forEach(target => {
      if ( target.isCollidingWith(missile) ) {
        targets.shift(target) && missiles.shift(missile);
        explosion(missile);
      }
    });

    explosions.forEach(explosion => {
      // if ( explosion.isCollidingWith(missile) ) {
      //   missiles.shift(missile);
      // }
      if ( explosion.count === 0) {
        explosions.shift(explosion);
      }
    });

  });
}

requestAnimationFrame(gameLoop);

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  terrain.draw(context);
  if (isGameOver){
    //do some end game stuff
  } else {
    staticTargets();
    drawExplosions();
    animate();
  }

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