const Battery = require('./Battery.js');
const Target = require('./Target.js');
const Weapon = require('./Weapon.js');

module.exports = class Game {
  constructor() {
    this.playerMissiles = [];
    this.enemyMissiles = [];
    this.targets = [];
    this.explosions = [];
    this.cities = [];
    this.batteries = [];
    this.level = 1;
    this.enemyWeaponCount = 10;
    this.playerMissileCount;
    this.score = 0;
    this.highScore = {playerName: 'TCK', level: 0, score: 0};
    this.paused = false;
    this.nextLevel = false;
    this.isGameOver = false;
    this.nextGameTimer = 240;
  }

  gameLoop(highScoreInput, start, ctx, c) {
    if (this.paused) {
      this.pause(ctx);
      return;
    } else {
      ctx.clearRect(0, 0, c.width, c.height);
    }
    
    if (!this.nextLevel && !this.isGameOver) {
      this.animateMissiles(this.playerMissiles, ctx);
      this.animateMissiles(this.enemyMissiles, ctx);
      this.detectCollisions();
      this.drawObjects(ctx);
      if (this.enemyMissiles.length < 1) {
        this.cities.length > 0
          ? this.nextLevel = true
          : this.isGameOver = true;
      }

    } else if (this.nextLevel) {
      if (this.nextGameTimer !== 0) {
        this.drawObjects(ctx);
        this.indicateNextLevel(ctx);
        this.nextGameTimer--;
      } else {
        this.level++;
        this.newGame();
        this.nextGameTimer = 240;
        this.nextLevel = false;
      }
    } else if (this.isGameOver) {
      this.handleGameOver(ctx, highScoreInput, start);
    }
  }

  togglePause() {
    this.paused = !this.paused;
  }

  pause(ctx) {
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.font = '48px serif';
    ctx.fillText('PAUSED', 210, 300);
  }

  newGame() {
    const eureka = new Target(60, 505, 40, 30, 'rgb(0, 200, 200)', false);
    const sanFrancisco = new Target(135, 510, 40, 30, 'rgb(0, 200, 200)', false);
    const sanLuisObispo = new Target(210, 515, 40, 30, 'rgb(0, 200, 200)', false);
    const santaBarbara = new Target(360, 510, 40, 30, 'rgb(0, 200, 200)', false);
    const losAngelas = new Target(430, 500, 40, 30, 'rgb(0, 200, 200)', false);
    const sanDiego = new Target(500, 515, 40, 30, 'rgb(0, 200, 200)', false);
    const battery1 = new Battery(0, 490, 60, 60, 'rgb(200, 200, 0)', false, 10);
    const battery2 = new Battery(270, 490, 70, 60, 'rgb(200, 200, 0)', false, 10);
    const battery3 = new Battery(540, 490, 60, 60, 'rgb(200, 200, 0)', false, 10);
    
    if (this.level === 1) {
      this.score = 0;
      this.cities = [eureka, sanFrancisco, sanLuisObispo, santaBarbara, losAngelas, sanDiego];
    } else if (!this.isGameOver) {
      this.score += (this.playerMissileCount * 5);
    }
    this.batteries = [battery1, battery2, battery3];
    this.setPlayerMissileCount();
    this.enemyShoot();
  }

  indicateNextLevel(ctx) {
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.font = '48px serif';
    ctx.fillText(`INCOMING`, 180, 300);
    this.drawScore(ctx);
  }

  handleGameOver(ctx, input, button) {
    button.style.display = 'block';
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.font = '48px serif';

    if (this.highScore.score < this.score) {
      ctx.fillText('HIGH SCORE!', 150, 300);
      input.style.display = 'block';
    } else if (this.score !== 0) {
      this.level = 1;
      ctx.fillText('THE END', 195, 300);
    }
  }

  setPlayerMissileCount() {
    this.playerMissileCount = this.batteries.reduce((accumulator, battery) => {
      return accumulator + battery.missileCount;
    }, 0);
  }

  setHighScore(name) {
    this.highScore = {
      playerName: name.value,
      level: this.level,
      score: this.score
    };

    localStorage.setItem('highscore', JSON.stringify(this.highScore));
  }

  getCurrentHighScore() {
    let currentHigh = JSON.parse(localStorage.getItem('highscore'));

    if (currentHigh) {
      this.highScore = currentHigh;
    }
  }

  drawBatteryCount(ctx) {
    const batteryCounts = [
      { count: 'OUT', x: 0, xPos: 10 }, 
      { count: 'OUT', x: 270, xPos: 285 }, 
      { count: 'OUT', x: 540, xPos: 550 }  
    ];
    
    if (this.batteries.length !== 0) {
      batteryCounts.forEach((batCount) => { 
        this.batteries.forEach((battery) => { 
          if (battery.x === batCount.x) {
            return batCount.count = battery.missileCount; 
          }
        });
      });
    }
    ctx.fillStyle = 'rgb(0, 200, 200)';
    ctx.font = '20px sans-serif';
    batteryCounts.forEach(count => ctx.fillText(count.count, count.xPos + 6, 570));
  }

  drawScore(ctx) {
    ctx.font = '18px sans-serif';
    ctx.fillStyle = 'rgb(5, 32, 78)';
    ctx.rect(0, 0, 600, 40);
    ctx.fill();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(`score: ${this.score}`, 30, 28);
    ctx.fillText(`high score: ${this.highScore.playerName.toUpperCase()} ${this.highScore.score}`, 320, 28);
  }

  findBattery(event) {
    const { batteries } = this;
    let batteryXpositions = batteries.map(battery => Math.abs(battery.x - event.layerX));
    let closestBattery = batteryXpositions.indexOf(Math.min(...batteryXpositions));
    let validBattery = batteries[closestBattery];
    let xPos = validBattery.x + 30;

    return {x: xPos, y: 490};
  }

  playerShoot(event) {
    if (this.paused) {
      return;
    }
    const { batteries, targets, playerMissiles } = this;
    const batteryPos = this.findBattery(event);
    const mousePos = {x: event.layerX, y: event.layerY};
    const missileTarget = new Target(mousePos.x, mousePos.y, 10, 10, 'rgb(200, 250, 25)', 0, 0);
  
    mousePos.y > 438 
      ? missileTarget.y = 435 
      : event.layerY;
    
    const counterMissile = new Weapon(batteryPos.x, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 12, batteryPos, { x: mousePos.x + 5, y: missileTarget.y + 5}, 10, true);
  
    targets.push(missileTarget);
    playerMissiles.push(counterMissile);

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

  enemyShoot() {
    const {enemyWeaponCount, enemyMissiles} = this;

    for (var i = 0; i < enemyWeaponCount * this.level; i++) {
      const playerTargets = [60, 135, 210, 360, 430, 500, 0, 270, 540];
      const enemyPos1 = { x: randomPos(10, 590), y: randomPos(-500, -100) };
      const enemyPos2 = { x: playerTargets[ randomPos(0, 8) ] + 25, y: 520 };
      const enemyMissile = 
      new Weapon(enemyPos1.x, enemyPos1.y, 5, 5, 'rgb(255, 0, 0)', 0, 0, 0, enemyPos1, enemyPos2, 1, true);

      enemyMissiles.push(enemyMissile);
    }
    function randomPos(min, max) {
      const minimum = Math.ceil(min);
      const maximum = Math.floor(max);
  
      return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }
  }

  drawObjects(ctx) {
    const terrain = new Target(0, 520, 600, 80, 'rgb(255, 255, 0)', 0);
    const gameArrays = [
      this.batteries,
      this.targets,
      this.explosions,
      this.playerMissiles,
      this.enemyMissiles,
      this.cities
    ];

    terrain.draw(ctx);
    this.drawBatteryCount(ctx);
    
    gameArrays.forEach(array => array.forEach(obj => {
      obj.count === 0 && obj.isExplosion
        ? this.explosions.shift(obj) 
        : obj.count--;
      obj.draw(ctx);
    }));
    this.drawScore(ctx);
  }

  animateMissiles(array) {
    array.forEach((missile) => {
      missile.missileTail();
      missile.move();
    });
  }

  objectiveDetection(weapons) {
    weapons.forEach((weapon) => {
      const posDiffY = Math.abs(weapon.y - weapon.p2.y);
      let deadWeapon = weapons.indexOf(weapon);

      if ( posDiffY < 5 ) {
        weapons.splice(deadWeapon, 1);
        this.targets.splice(deadWeapon, 1);
        weapon.explode(this);
      }
    });
  }

  explosionDetection(array) {
    array.forEach(object => {
      this.enemyMissiles.forEach(weapon => {
        const hypoDiff = Math.hypot(object.x - weapon.x, object.y - weapon.y);
        const deadWeapon = this.enemyMissiles.indexOf(weapon);
        const deadTarget = array.indexOf(object);
        
        if ( weapon.isCollidingWith(object) 
          && object.x === weapon.p2.x - 25 
          && weapon.y > 510 ) {
          return array.splice(deadTarget, 1);

        } else if ( hypoDiff < object.radius ) {
          this.enemyMissiles.splice(deadWeapon, 1);
          this.score += 25 * this.level;
          weapon.explode(this);
        }
      });
    });
  }

  detectCollisions() {
    let targets = [
      this.cities,
      this.batteries,
      this.explosions
    ];
    let weapons = [
      this.playerMissiles,
      this.enemyMissiles
    ];

    weapons.forEach(array => this.objectiveDetection(array));
    targets.forEach(array => this.explosionDetection(array));
  }
};