const GamePiece = require('./GamePiece.js');

module.exports = class Target extends GamePiece {
  constructor(x, y, width, height, color, dx, dy, dv, isExplosion = false, radius = 0) {
    super(x, y, width, height, color, dx, dy, dv);
    this.count = 60;
    this.radius = radius;
    this.isExplosion = isExplosion;
  }

  draw(ctx) {
    const { x, y, isExplosion, radius, color, width, height } = this;

    if (!isExplosion) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.fillRect(x, y, width, height);
    } else {
      ctx.fillStyle = 'rgb(255, 100, 0)';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }
  }

};