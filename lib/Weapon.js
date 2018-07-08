const GamePiece = require('./GamePiece.js');
const Target = require('./Target.js');

module.exports = class Weapon extends GamePiece {
  constructor(x, y, width, height, color, dx, dy, dv = 0.5, p1, p2, speed, isMissile = false) {
    super(x, y, width, height, color, dx, dy, dv = 0.5);
    this.dv = dv;
    this.p1 = p1;
    this.p2 = p2;
    this.speed = speed;
    this.isMissile = isMissile;
    this.angle = Math.atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x) * 180 / Math.PI;
    this.radians = this.angle * Math.PI / 180;
    this.xunits = Math.cos(this.radians) * this.speed;
    this.yunits = Math.sin(this.radians) * this.speed;
    this.tail = [];
  }

  missileTail() {
    const { x, y, width, height, color, tail } = this;
    const segment = 
    new Weapon(x, y, width, height, color, 0, 0, 0, {}, {}, 0, true);

    tail.push(segment);
  }

  draw(ctx) {
    const { x, y, color } = this;

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
    this.tail.forEach(segment => segment.draw(ctx));
  }
  
  move() {
    super.move();
    if (this.isMissile) {
      this.x += this.xunits;
      this.y += this.yunits;
    }
  }

  explode(game) {
    const explosion = 
    new Target(this.x, this.y, 30, 30, 'rgb(255, 100, 0)', 0, 0, 0, true, 25);
    
    game.explosions.push(explosion);
  }

};