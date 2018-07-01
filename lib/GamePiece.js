module.exports = class GamePiece {
  constructor(x, y, width, height, color, dx, dy, dv = 0.5) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx; 
    this.dy = dy; 
    this.dv = dv;
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }

  draw(ctx) {
    const { x, y, width, height, color } = this;

    if ((this.isMissile || this.isExplosion) !== true) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.fillRect(x, y, width, height);
    }
  }
  // draw(ctx) {
  //   const { x, y, width, height, color, isMissile, isExplosion } = this;
   
  //   if (isExplosion === true) {
  //     ctx.fillStyle = 'rgb(255, 100, 0)';
  //     ctx.beginPath();
  //     ctx.arc(x, y, 40, 0, Math.PI * 2, true);
  //     ctx.fill();
  //     ctx.closePath();
  //     return
  //   } else if (isMissile === true) {
  //     ctx.fillStyle = color;
  //     ctx.beginPath();
  //     ctx.arc(x, y, 3, 0, Math.PI * 2, false);
  //     ctx.fill();
  //     ctx.closePath();
  //   } else {
  //     ctx.fillStyle = color;
  //     ctx.beginPath();
  //     ctx.fillRect(x, y, width, height);
  //   }
  // }

  move( xAmount = this.dx, yAmount = this.dy) {
    this.x += xAmount * this.dv;
    this.y += yAmount * this.dv;
  }
  
}

