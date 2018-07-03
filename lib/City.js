const Target = require('./Target.js');

module.exports = class City extends Target {
  constructor(x, y, width, height, color, dx = 0, dy = 0, dv = 0, isExplosion = false) {
    super(x, y, width, height, color, dx = 0, dy = 0, dv = 0, isExplosion = false);
  }

};