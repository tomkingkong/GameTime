module.exports = class GamePiece {
  constructor(x, y, width, height, color, dx = 0, dy = 0, dv = 0) {
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
      this.x > object.x + object.width || 
      this.y + this.height < object.y ||
      this.y > object.y + object.height
    );
  }

  move( xAmount = this.dx, yAmount = this.dy) {
    this.x += xAmount * this.dv;
    this.y += yAmount * this.dv;
  }
  
};

