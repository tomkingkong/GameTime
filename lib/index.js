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

canvas.addEventListener('click', function (event) {
  // console.log(event.layerX, event.layerY);
  var missileTarget = new Target((event.layerX), (event.layerY), 10, 10, 'rgb(200, 0, 0)', 0, 0);
  targets.push(missileTarget);
  var counterMissile = new Weapon(300, 520, 10, 10, 'rgb(0, 200, 200)', 0, 0, 0, {x:300, y:520}, {x:event.layerX, y:event.layerY}, 2)
  // console.log(counterMissile.p2);
  missiles.push(counterMissile);
  console.log(counterMissile.p2);
})

function staticTargets() {
  //generate terrain
  terrain.draw(context);
  //Handle Targets
  targets.forEach((target, i) => {
    target.draw(context);
  });
}

function animate() {
  //Handle Missiles
  missiles.forEach((missile, i) => {
    missile.draw(context);
    missile.fire();

    targets.forEach(target => {
      if ( target.isCollidingWith(missile) ) {
        targets.pop(target);
        missiles.pop(missile);
        return missile.explode();
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