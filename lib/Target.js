const GamePiece = require('./GamePiece.js');

module.exports = class Target extends GamePiece {
  constructor(x, y, width, height, color, dx, dy, dv) {
    super(x, y, width, height, color, dx, dy, dv)
    
  }

}