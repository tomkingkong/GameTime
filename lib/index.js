const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const GamePiece = require('./GamePiece.js');
var Weapon = require('./Weapon.js');
var Target = require('./Target.js');
var isGameOver = false;
var terrain = new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);

// var missile1 = new Weapon(300, 520, 10, 10, 'rgb(200, 0, 0)', 0, -1);
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
})

function staticTargets() {
  //generate terrain
  terrain.draw(context);
  //Handle Targets
  targets.forEach((target, i) => {
    target.draw(context);
  });
}


function fire(event) {
  var speed = 1;
  // var p1 = {x:object.p1.x, y:object.p1.y}; //replace with playerStart (battery1:{x:300, y:520}, battery2:{x:50, y:520}, battery3:{x:450, y:520})
  // var p2 = {x:object.p2.x, y:object.p2.y};
  //Find Distance between p1 and p2 == squareRoot[(x2 - x1)^2 + (y2 - y1)^2]
  var dx = object.p2.x - object.p1.x; //distance X
  var dy = object.p2.y - object.p1.y; //distance Y
  var distance = Math.sqrt((dx * dx) + (dy * dy)); //squareRoot of dx + dy == distance

  //How many moves to make each redraw
  var moves =  distance/speed;
  var xunits = (object.p2.x - object.p1.x)/moves;
  var yunits = (object.p2.y - object.p1.y)/moves;

  if (moves > 0 ) {
    moves--;
    object.x += xunits;
    object.y += yunits;
 }
}

function animate() {
  //Handle Missiles
  missiles.forEach((missile, i) => {
    missile.draw(context);
    missile.fire();
    // missile.move();
    // missile.fire();

    missiles.forEach(function(obj, j) {
      if (i !== j && missile.isCollidingWith(obj)){
        obj.dx = 0;
        obj.dy = 0;
        // obj.explode();
        // isGameOver = true;
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