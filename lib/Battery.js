const Target = require('./Target.js');

module.exports = class Battery extends Target {
  constructor(x, y, width, height, color, dx, dy, dv, isExplosion = false) {
    super(x, y, width, height, color, dx, dy, dv, isExplosion = false);
    this.count = 0;
    this.missileCount = 10;
  }
};