const GamePiece = require('./GamePiece.js');

module.exports = class Target extends GamePiece {
  constructor(x, y, width, height, color, dx, dy, dv, isExplosion = false) {
    super(x, y, width, height, color, dx, dy, dv)
    this.count = 60;
    this.isExplosion = isExplosion;
  }

  drawExplosion(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 40, 0, Math.PI * 2, false);
    ctx.fill();
  }

}