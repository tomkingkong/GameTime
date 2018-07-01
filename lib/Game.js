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

  //Broken [Weapon is not a constructor?]
  shoot(event) {
    const missileTarget = 
    new Target((event.layerX), (event.layerY), 10, 10, 'rgb(200, 250, 25)', 0, 0);

    const counterMissile = 
    new Weapon(300, 520, 5, 5, 'rgb(0, 200, 200)', 0, 0, 0, {x: 300, y: 520}, {x: event.layerX, y: event.layerY}, 6, true)
    
    this.targets.push(missileTarget);
    this.missiles.push(counterMissile);
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
        : obj.draw(ctx);
    }));
  }

  detectCollision() {
    const arraysToDraw = [
      this.cities,
      this.batteries,
      this.explosions,
      this.targets,
      this.enemyTargets,
      this.enemyMissiles,
      this.missiles,
    ]

    this.targets.forEach(target => {
      if ( target.isCollidingWith(missile) ) {
        this.targets.shift(target);
        array.shift(missile);
        explode(missile);
      }
    });

  }

}