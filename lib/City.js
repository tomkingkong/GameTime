const Target = require('./Target.js');

module.exports = class City extends Target {
  constructor(x, y, width, height, color, dx, dy, dv, isExplosion=false) {
    super(x, y, width, height, color, dx, dy, dv, isExplosion=false)
  }

}