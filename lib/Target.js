const GamePiece = require('./GamePiece.js');

module.exports = class Target extends GamePiece {
  constructor(x, y, width, height, color, dx, dy, dv, isExplosion = false, radius = 0) {
    super(x, y, width, height, color, dx, dy, dv);
    this.count = 80;
    this.radius = radius;
    this.isExplosion = isExplosion;
  }

  draw(ctx) {
    super.draw(ctx);
    const { x, y, isExplosion, radius } = this;
   
    if (isExplosion === true) {
      ctx.fillStyle = 'rgb(255, 100, 0)';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
      return;
    }
  }

};