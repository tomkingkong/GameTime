module.exports = class GamePiece {
  constructor(x, y, width, height, color, dx, dy, dv=0.5) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx; //direction: 1 === right, 0 === stop, -1 === left
    this.dy = dy; //direction: 1 === down, 0 === stop, -1 === up
    this.dv = dv; //velocity / speed
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
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move(xAmount=this.dx, yAmount=this.dy) {
    this.x += xAmount * this.dv;
    this.y += yAmount * this.dv;
  }
}

