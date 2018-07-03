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
    this.lvl = 1;
    this.enemyWeaponCount = (this.lvl * 10) / 1;
    this.playerMissileCount;
    this.isGameOver = false;
    this.score = 0;
  }

  newGame() {
    //Create California Cities
    const eureka = new City(60, 505, 40, 30, 'rgb(0, 200, 200)', false);
    const sanFrancisco = new City(135, 510, 40, 30, 'rgb(0, 200, 200)', false);
    const sanLuisObispo = new City(210, 515, 40, 30, 'rgb(0, 200, 200)', false);
    const santaBarbara = new City(360, 510, 40, 30, 'rgb(0, 200, 200)', false);
    const losAngelas = new City(430, 500, 40, 30, 'rgb(0, 200, 200)', false);
    const sanDiego = new City(500, 515, 40, 30, 'rgb(0, 200, 200)', false);
    //Create Batteries
    const battery1 = new Battery(0, 485, 60, 60, 'rgb(255, 255, 0)', false, 10);
    const battery2 = new Battery(270, 490, 70, 60, 'rgb(255, 255, 0)', false, 10);
    const battery3 = new Battery(540, 495, 60, 60, 'rgb(255, 255, 0)', false, 10);
    
    if (this.lvl === 1) {
      this.cities = [eureka, sanFrancisco, sanLuisObispo, santaBarbara, losAngelas, sanDiego];
      this.batteries = [battery1, battery2, battery3];
      this.playerMissileCount = this.batteries.reduce((accumulator, battery) => {
        return accumulator + battery.missileCount;
      }, 0);

    } else if (this.cities !== 0) {
      this.score += (this.playerMissileCount * 5);
      this.enemyTargets = [];
      this.batteries = [battery1, battery2, battery3];
      this.playerMissileCount = this.batteries.reduce((accumulator, battery) => {
        return accumulator + battery.missileCount;
      }, 0);
    }
  }

  gameOver(ctx) {
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.font = '48px serif';
    ctx.fillText('THE END', 200, 300);
  }

  generateTerrain(ctx) {
    const terrain = 
    new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);

    terrain.draw(ctx);
  }

  findBattery(event) {
    let xPos;

    //determine if battery exists
    // if (this.batteries) {
      
    // }

    event.layerX < 200 ? xPos = 30
      : event.layerX > 400 ? xPos = 570
        : xPos = 300;
    return {x: xPos, y: 490};
  }

  shoot(event) {
    if (this.playerMissileCount === 0) {
      return false;
    }
    const batteryPos = this.findBattery(event);
    const mousePos = {x: event.layerX, y: event.layerY};
    const missileTarget = new Target(mousePos.x, mousePos.y, 10, 10, 'rgb(200, 250, 25)', 0, 0);

    if ( mousePos.y > 438 ) {
      missileTarget.y = 435;
    } 

    const counterMissile = new Weapon(batteryPos.x, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 12, batteryPos, { x: missileTarget.x + 5, y: missileTarget.y + 5}, 10, true);
  
    this.targets.push(missileTarget);
    this.missiles.push(counterMissile);

    this.playerMissileCount --;
  }

  randomPos(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  enemyShoot() {
    for (var i = 0; i < this.enemyWeaponCount * this.lvl; i++) {
      const playerTargets = [60, 135, 210, 360, 430, 500, 0, 270, 540];
      const enemyPos1 = { x: this.randomPos(10, 590), y: this.randomPos(-1500, -100) };
      const enemyPos2 = { x: playerTargets[ this.randomPos(0, 8) ] + 25, y: 520 };
      const enemyTarget = 
      new Target(enemyPos2.x, enemyPos2.y, 10, 10, 'rgba(0, 0, 0, 0)', 0, 0);
      const enemyMissile = 
      new Weapon(enemyPos1.x, enemyPos1.y, 5, 5, 'rgb(255, 0, 0)', 0, 0, 0, enemyPos1, enemyPos2, 0.75, true);

      this.enemyMissiles.push(enemyMissile);
      this.enemyTargets.push(enemyTarget);
    }
  }

  explode(weapon) {
    const explosion = 
    new Target(weapon.x, weapon.y, 30, 30, 'rgb(255, 100, 0)', 0, 0, 0, true, 25);
    
    this.explosions.push(explosion);
  }

  drawObjects(ctx) {
    const gameArrays = [
      this.cities,
      this.batteries,
      this.explosions,
      this.targets,
      this.enemyTargets,
      this.enemyMissiles,
      this.missiles
    ];

    this.generateTerrain(ctx);

    gameArrays.forEach(array => array.forEach(obj => {
      obj.count === 0 && obj.isExplosion === true 
        ? this.explosions.shift(obj) 
        : obj.count-- && obj.draw(ctx); 
    }));
  }

  animateMissiles(array, ctx) {
    array.forEach((missile) => {
      //create missile tail
      missile.missileTail();
      //draw array
      missile.move();
      missile.draw(ctx);
      missile.tail.forEach(seg => seg.draw(ctx));
  
      this.objectiveDetection(array);
    });
  }

  objectiveDetection(weapons) {
    weapons.forEach((weapon) => {
      const posDiffY = Math.abs(weapon.y - weapon.p2.y);
      let deadWeapon = weapons.indexOf(weapon);

      if ( posDiffY < 5 ) {
        weapons.splice(deadWeapon, 1);
        this.targets.splice(weapons.findIndex(index => index), 1);
        this.explode(weapon);
      }
    });
  }

  explosionDetection(explosions, weapons) {
    explosions.forEach(explosion => {
      weapons.forEach(missile => {
        let hypoDiff = Math.sqrt(Math.pow(explosion.x - missile.x, 2) + Math.pow(explosion.y - missile.y, 2));
        let deadMissile = weapons.indexOf(missile);
  
        if (hypoDiff < explosion.radius) {
          this.explode(missile);
          weapons.splice(deadMissile, 1);
          this.score += 25 * this.lvl;
        }
      });
    });
  }

  destructionDetection(targets, weapons) {
    targets.forEach((target) => {
      weapons.forEach((weapon) => {
        let deadTarget = targets.indexOf(target);

        if ( weapon.isCollidingWith(target) && target.x === weapon.p2.x - 25 && weapon.y > 510) {
          targets.splice(deadTarget, 1);
        }
      });
    });
  }

  detectCollisions() {
    this.explosionDetection(this.explosions, this.enemyMissiles);
    this.destructionDetection(this.cities, this.enemyMissiles);
    this.destructionDetection(this.batteries, this.enemyMissiles);
  }

};