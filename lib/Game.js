const GamePiece = require('./GamePiece.js');
const Target = require('./Target.js');
const Game = require('./Game.js');

module.exports = class Game {
  constructor() {
    this.missiles = [];
    this.targets = [];
    this.explosions = [];
  }

}