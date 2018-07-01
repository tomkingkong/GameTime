const GamePiece = require('./GamePiece.js');
const Target = require('./Target.js');
const City = require('./City.js');
const Battery = require('./Battery.js');
const Weapon = require('./Weapon.js');

module.exports = class Game {
  constructor() {
    this.missiles = [];
    this.enemyMissiles = [];
    this.enemyTargets = [];
    this.targets = [];
    this.explosions = [];
    this.cities = [];
    this.batteries = [];
    this.enemyWeaponCount = 1;
  }

  newGame() {
    //Create California Cities
    const eureka = new City(60, 505, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    const sanFrancisco = new City(135, 510, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    const sanLuisObispo = new City(210, 515, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    const santaBarbara = new City(360, 510, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    const losAngelas = new City(430, 500, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    const sanDiego = new City(500, 515, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);

    this.cities = [eureka, sanFrancisco, sanLuisObispo, santaBarbara, losAngelas, sanDiego];

    //Create Batteries
    const battery1 = new Battery(0, 490, 60, 60, 'rgb(255, 255, 0)', 0, 0, 0, false, 10)
    const battery2 = new Battery(270, 490, 70, 60, 'rgb(255, 255, 0)', 0, 0, 0, false, 10)
    const battery3 = new Battery(540, 490, 60, 60, 'rgb(255, 255, 0)', 0, 0, 0, false, 10)

    this.batteries = [battery1, battery2, battery3];

    //Start Game with 10 enemy weapons (missiles || aircraft)
    this.enemyWeaponCount = 10;
  }


  findBattery(event) {
    let xPos;

    //TODO:determine if battery exists
  
    event.layerX < 200 ? xPos = 30
      : event.layerX > 400 ? xPos = 570
        : xPos = 300;
    return {x: xPos, y: 490}
  }

  shoot(event) {
    var batteryPos = this.findBattery(event);
    var mousePos = {x: event.layerX, y: event.layerY};
    var missileTarget = new Target(mousePos.x, mousePos.y, 10, 10, 'rgb(200, 250, 25)', 0, 0);

    if ( mousePos.y > 438 ) {
      missileTarget.y = 435;
    } 

    var counterMissile = new Weapon(batteryPos.x, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 12, batteryPos, { x: missileTarget.x + 5, y: missileTarget.y + 5}, 10, true);
  
    this.targets.push(missileTarget);
    this.missiles.push(counterMissile);
  }

  randomPos(min, max) {
    var minimum = Math.ceil(min);
    var maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }


  enemyShoot() {
    //separation of enemy missile/target array creation
    //and firing missiles
    var lvl = 1;

    for (var i = 0; i < this.enemyWeaponCount * lvl; i++) {
      const playerTargets = [60, 135, 210, 360, 430, 50, 30, 300, 570];
      const enemyPos1 = { x: this.randomPos(10, 590), y: this.randomPos(-800, -100) };
      const enemyPos2 = { x: playerTargets[ this.randomPos(0, 8) ], y: 510 };
      const enemyTarget = 
      new Target(enemyPos2.x, enemyPos2.y, 10, 10, 'rgba(0, 0, 0, 0)', 0, 0);
      const enemyMissile = 
      new Weapon(enemyPos1.x, enemyPos1.y, 5, 5, 'rgb(255, 0, 0)', 0, 0, 0, enemyPos1, enemyPos2, 0.75, true)

      this.enemyMissiles.push(enemyMissile);
      this.enemyTargets.push(enemyTarget);
    }
  }

  explode(weapon) {
    var explosion = 
    new Target(weapon.x, weapon.y, 30, 30, 'rgb(255, 100, 0)', 0, 0, 0, true);
    
    this.explosions.push(explosion);
  }

  drawObjects(ctx) {
    const arraysToDraw = [
      this.cities,
      this.batteries,
      this.explosions,
      this.targets,
      this.enemyTargets,
      this.enemyMissiles,
      this.missiles,
    ]

    arraysToDraw.forEach(array => array.forEach(obj => {
      obj.count === 0 && obj.isExplosion === true 
        ? this.explosions.shift(obj) 
        : obj.count-- && obj.draw(ctx); 
    }));
  }

  explosionDetection() {
    this.explosions.forEach(explosion => {
      this.enemyMissiles.forEach(missile => {
        if ( missile.isCollidingWith(explosion) ) {
          var deadMissile = this.enemyMissiles.findIndex(missile => {
            var posDiffY = Math.abs( missile.y - explosion.y);
            var posDiffX = Math.abs( missile.x - explosion.x);

            if ( posDiffY < 30 && posDiffX < 30 ) {
              return missile;
            }

          });

          this.enemyMissiles.splice(deadMissile, 1);
          this.explode(missile);
          this.explosionDetection();
          return
        }
      });
    })
  }

  cityDestructionDetection() {
    this.cities.forEach(city => {
      this.explosions.forEach(explosion => {
        if ( city.isCollidingWith(explosion) ) {
          var deadTarget = this.cities.findIndex(city => {
            // var posDiffY = Math.abs( city.y - explosion.y);
            var posDiffX = Math.abs( city.x - explosion.x);

            if ( posDiffX > 1 ) {
              return city;
            }

          });

          this.cities.splice(deadTarget, 1);
          return
        }
      });
    });
  }

  batteryDestructionDetection() {
    this.batteries.forEach(battery => {
      this.explosions.forEach(explosion => {
        if ( explosion.isCollidingWith(battery) ) {
          this.batteries.splice(this.batteries.findIndex(index => index), 1);
        }
      });
    }); 
  }

  detectCollision() {    
    //enemy missiles and aircraft collide with explosions, then make explosions    
    this.explosionDetection();
    // explosions.forEach(explosion => {
    //   enemyMissiles.forEach(missile => {
    //     if ( missile.isCollidingWith(explosion) ) {
    //       var deadMissile = enemyMissiles.findIndex(missile => {
    //         var posDiffY = Math.abs( missile.y - explosion.y);
    //         var posDiffX = Math.abs( missile.x - explosion.x);

    //         if ( posDiffY < 30 && posDiffX < 30 ) {
    //           return missile;
    //         }

    //       });

    //       enemyMissiles.splice(deadMissile, 1);
    //       this.explode(missile);
    //       return
    //     }
    //   });
    // })

    //enemy missiles blow up on player bases
    //player bases die after collision
    this.cityDestructionDetection();
    this.batteryDestructionDetection();
  }

  generateTerrain(ctx) {
    const terrain = new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);
    
    terrain.draw(ctx);
  }

  gameOver(ctx) {
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.font = '48px serif';
    ctx.fillText('THE END', 200, 300);
  }
}