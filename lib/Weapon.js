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
    const {x, y, width, height, color, tail} = this;

    const segment = 
    new GamePiece(x - 3, y - 3, width, height, color, 0, 0, 0);

    tail.push(segment);
  }

  draw(ctx) {
    super.draw(ctx);
    const { x, y, color, isMissile } = this;

    if (isMissile === true) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
      return
    }
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

}