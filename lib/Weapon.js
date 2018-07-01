const GamePiece = require('./GamePiece.js');

module.exports = class Weapon extends GamePiece {
  constructor(x, y, width, height, color, dx, dy, dv = 0.5, p1, p2, speed, isMissile = false) {
    super(x, y, width, height, color, dx, dy, dv = 0.5)
    this.p1 = p1;
    this.p2 = p2;
    this.speed = speed;
    this.isMissile = isMissile;
    // angle in degrees
    this.angle = Math.atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x) * 180 / Math.PI;
    // angle in radians
    this.radians = this.angle * Math.PI / 180;
    //How many moves to make each redraw
    this.xunits = Math.cos(this.radians) * this.speed;
    this.yunits = Math.sin(this.radians) * this.speed;
    this.tail = [];
  }

  missileTail() {
    const {width, height, color, tail} = this;
    const pos = {x: 0, y: 0};
    const segment = 
    new Weapon(this.x, this.y, width, height, color, 0, 0, 0, pos, pos, 0, true);
    
    tail.push(segment);
  }
  
  move() {
    super.move()
    // this.currentPos = {x:Math.round(this.x), y:Math.round(this.y)};
    if (this.isMissile === true) {
      this.x += this.xunits;
      this.y += this.yunits;
      return
    }
  }

  // explode(weapon) {
  //   var explosion = new Target(weapon.x, weapon.y, 50, 50, weapon.color, 0, 0, 0, true);
  //   this.explosions.push(explosion);
  // }
}