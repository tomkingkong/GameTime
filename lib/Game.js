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
    this.enemyWeaponCount = (this.lvl * 10) / 2;
    this.playerMissileCount;
    this.isGameOver = false;
    this.score = 0;
    this.highScore = {playerName: 'TCK', level: 1, score: 0};
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
    const battery1 = new Battery(0, 490, 60, 60, 'rgb(200, 200, 0)', false, 10);
    const battery2 = new Battery(270, 490, 70, 60, 'rgb(200, 200, 0)', false, 10);
    const battery3 = new Battery(540, 490, 60, 60, 'rgb(200, 200, 0)', false, 10);
    
    if (this.lvl === 1) {
      this.score = 0;
      this.cities = [eureka, sanFrancisco, sanLuisObispo, santaBarbara, losAngelas, sanDiego];
      this.batteries = [battery1, battery2, battery3];
      this.setPlayerMissileCount();
    } else if (this.cities !== 0) {
      this.score += (this.playerMissileCount * 5);
      this.enemyTargets = [];
      this.batteries = [battery1, battery2, battery3];
      this.setPlayerMissileCount();
    }
  }

  setPlayerMissileCount() {
    this.playerMissileCount = this.batteries.reduce((accumulator, battery) => {
      return accumulator + battery.missileCount;
    }, 0);
  }

  gameOver(ctx, input, button) {
    button.style.display = "block";
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.font = '48px serif';

    if (this.highScore.score < this.score) {
      ctx.fillText('HIGH SCORE!', 150, 300);
      input.style.display = "block";
    } else if (this.score !== 0) {
      this.lvl = 1;
      ctx.fillText('THE END', 195, 300);
    } else {
      // ctx.fillText('START GAME', 150, 300);
    }
  }

  setHighScore(name) {
    this.highScore = {
      playerName: name.value,
      level: this.lvl,
      score: this.score
    };

    localStorage.setItem('highscore', JSON.stringify(this.highScore));
  }

  currentHighScore() {
    this.highScore = JSON.parse(localStorage.getItem('highscore'));
  }

  drawText(ctx) {
    const {batteries} = this;
    let bat1Count = {count: 'OUT', x: 0, xPos: 10};
    let bat2Count = {count: 'OUT', x: 270, xPos: 285};
    let bat3Count = {count: 'OUT', x: 540, xPos: 550};
    const batteryCounts = [bat1Count, bat2Count, bat3Count];
    
    if (batteries.length !== 0) {
      batteryCounts.forEach((batCount) => { 
        batteries.forEach((battery) => { 
          if (battery.x === batCount.x) {
            return batCount.count = battery.missileCount; 
          }
        });
      });
    }
    ctx.fillStyle = 'rgb(0, 200, 200)';
    ctx.font = '20px sans-serif';
    batteryCounts.forEach(count => ctx.fillText(count.count, count.xPos + 6, 570));
    this.drawScore(ctx);
  }

  drawScore(ctx) {
    ctx.font = '18px sans-serif';
    ctx.fillStyle = 'rgb(5, 32, 78)';
    ctx.rect(0, 0, 600, 40);
    ctx.fill();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(`level: ${this.lvl}`, 30, 28);  
    ctx.fillText(`score: ${this.score}`, 120, 28);
    ctx.fillText(`high score: ${this.highScore.playerName} | ${this.highScore.score}`, 320, 28);
  }

  generateTerrain(ctx) {
    const terrain = new GamePiece(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);

    terrain.draw(ctx);
  }

  findBattery(event) {
    const {batteries} = this;
    let battMinX = batteries.map(battery => Math.abs(battery.x - event.layerX));
    let indexOfBatt = battMinX.indexOf(Math.min(...battMinX));
    let validBat = batteries[indexOfBatt];
    let xPos = validBat.x + 30;

    return {x: xPos, y: 490};
  }

  shoot(event) {
    const {batteries, targets, missiles} = this;
    const batteryPos = this.findBattery(event);
    const mousePos = {x: event.layerX, y: event.layerY};
    const missileTarget = new Target(mousePos.x, mousePos.y, 10, 10, 'rgb(200, 250, 25)', 0, 0);
    
    mousePos.y > 438 ? missileTarget.y = 435 : event.layerY;
    
    const counterMissile = new Weapon(batteryPos.x, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 12, batteryPos, { x: missileTarget.x + 5, y: missileTarget.y + 5}, 10, true);
  
    targets.push(missileTarget);
    missiles.push(counterMissile);

    batteries.forEach(battery => {
      if (battery.x === counterMissile.p1.x - 30) {
        battery.missileCount -= 1;
      }
      if (battery.missileCount === 0) {
        batteries.splice(batteries.indexOf(battery), 1);
      }
    });
    this.setPlayerMissileCount();
  }

  randomPos(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  enemyShoot() {
    const {enemyWeaponCount, enemyMissiles, enemyTargets, lvl, randomPos} = this;

    for (var i = 0; i < enemyWeaponCount * lvl; i++) {
      const playerTargets = [60, 135, 210, 360, 430, 500, 0, 270, 540];
      const enemyPos1 = { x: randomPos(10, 590), y: randomPos(-500, -100) };
      const enemyPos2 = { x: playerTargets[ randomPos(0, 8) ] + 25, y: 520 };
      const enemyTarget = 
      new Target(enemyPos2.x, enemyPos2.y, 10, 10, 'rgba(0, 0, 0, 0)');
      const enemyMissile = 
      new Weapon(enemyPos1.x, enemyPos1.y, 5, 5, 'rgb(255, 0, 0)', 0, 0, 0, enemyPos1, enemyPos2, 1, true);

      enemyMissiles.push(enemyMissile);
      enemyTargets.push(enemyTarget);
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
      missile.missileTail();
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
        let hypoDiff = Math.hypot(explosion.x - missile.x, explosion.y - missile.y);
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