const Target = require('./Target.js');

module.exports = class Battery extends Target {
  constructor(x, y, width, height, color, dx, dy, dv, isExplosion=false, missileCount) {
    super(x, y, width, height, color, dx, dy, dv, isExplosion=false)
    this.missileCount = 0;
  }
}