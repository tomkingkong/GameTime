const GamePiece = require('./GamePiece.js');
const Target = require('./Target.js');
const City = require('./City.js');
const Battery = require('./Battery.js');
const Weapon = require('./Weapon.js');

module.exports = class Game {
  constructor() {
    this.missiles = [];
    this.targets = [];
    this.explosions = [];
    this.cities = [];
    this.batteries = [];
    this.cityCount = this.cities.length;
    this.enemyWeaponCount = 0;
  }

  newGame() {
    //Create California Cities
    var eureka = new City(60, 505, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    var sanFrancisco = new City(135, 510, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    var sanLuisObispo = new City(210, 515, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    var santaBarbara = new City(360, 510, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    var losAngelas = new City(430, 500, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);
    var sanDiego = new City(500, 515, 40, 30, 'rgb(0, 200, 200)', 0, 0, 0, false);

    this.cities = [eureka, sanFrancisco, sanLuisObispo, santaBarbara, losAngelas, sanDiego];

    //Create Batteries
    var battery1 = new Battery(0, 490, 60, 60, 'rgb(255, 255, 0)', 0, 0, 0, false, 10)
    var battery2 = new Battery(270, 490, 70, 60, 'rgb(255, 255, 0)', 0, 0, 0, false, 10)
    var battery3 = new Battery(540, 490, 60, 60, 'rgb(255, 255, 0)', 0, 0, 0, false, 10)

    this.batteries = [battery1, battery2, battery3];

    //Start Game with 10 enemy weapons (missiles || aircraft)
    this.enemyWeaponCount = 10;
  }

  //Broken [Weapon is not a constructor?]
  shoot(event) {
    var missileTarget = new Target((event.layerX), (event.layerY), 10, 10, 'rgb(200, 250, 25)', 0, 0);

    this.targets.push(missileTarget);
    var counterMissile = new Weapon(300, 520, 5, 5, 'rgb(0, 200, 200)', 0, 0, 0, {x:300, y:520}, {x:event.layerX, y:event.layerY}, 6, true)
   
    this.missiles.push(counterMissile);
  }

  drawObjects(ctx) {
    this.targets.forEach(target => target.draw(ctx));
    this.batteries.forEach(battery => battery.draw(ctx));
    this.cities.forEach(city => city.draw(ctx));
  }
}