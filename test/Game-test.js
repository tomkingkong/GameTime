const { assert } = require('chai');
const Game = require('../lib/Game.js');
 
describe('Game', function () {
  let game;

  class Context {
    constructor() {
      this.canvas = "#game";
      this.fillStyle = "#000000";
    }

    beginPath() {}

    arc() {}

    fill() {}

    closePath(){}
  }

  beforeEach(() => {
    game = new Game();
    game.playerMissileCount = 0;
    context = new Context();
  });

  it('should exist', function () {
    assert.exists(game);
  });

  it('should store all the things', function () {
    var expectedGame = {
      missiles: [],
      enemyMissiles: [],
      targets: [],
      explosions: [],
      cities: [],
      batteries: [],
      lvl: 1,
      enemyWeaponCount: 5,
      playerMissileCount: 0,
      isGameOver: false,
      score: 0,
      highScore: {playerName: 'TCK', level: 1, score: 0},
      paused: false
    };

    assert.deepEqual(expectedGame, game);
  });
  
  it('should start with cities and batteries on newGame()', function () {
    assert.deepEqual(game.cities.length, 0);
    assert.deepEqual(game.batteries.length, 0);
    
    game.newGame();

    assert.deepEqual(game.cities.length, 6);
    assert.deepEqual(game.batteries.length, 3);
  });
  
  it('should shoot missiles at player upon new game or level', function () {
    assert.deepEqual(game.enemyMissiles.length, 0);

    game.enemyShoot();

    assert.deepEqual(game.enemyMissiles.length, 5);
  });
  
  it('should end if enemey missiles destroy all player cities', function () {
    game.newGame();

    assert.deepEqual(game.cities.length, 6);

    for (var i = 0; i < 7; i++) {
      game.enemyShoot();
    }

    game.enemyMissiles.forEach(missile => { 
      for (var i = 0; i < 2500; i++) {
        missile.move();
        game.explosionDetection(game.cities);
      }
    });

    if (game.cities.length <= 0) {
      game.isGameOver = true;
    }

    assert.equal(game.isGameOver, true);
  });
  
  it('should let player defend themselves with missiles', function () {
    game.shoot(event);

    console.log(game.playerMissileCount)
    //assert
  });

  it.skip('should loop through draw and animate methods', function() {
    let highScoreInput = 'BOB';
    let start = //dom element;

    game.gameLoop(highScoreInput, start, context);

    //assert
  });
  
  it('should set the player\'s missile count based on battery missile count', function() {
    assert.equal(game.playerMissileCount, 0);

    game.newGame();
    game.setPlayerMissileCount();

    //assert
  });
  
  it.skip('should draw all the things', function() {
    
    game.drawObjects();

    //assert
  });
  
  it.skip('should detect if enemy missiles hit explosions and cause more explosions', function() {
    
    game.explosionDetection(game.enemyMissiles);

    //game.explode(missile);
    //assert
  });
  
  it.skip('should find the correct battery to shoot from', function() {
   
    game.findBattery(event);

    //assert
  });
  
  it.skip('should run Game Over routine when player dies', function() {
    
    game.gameOver();

    //assert
  });

  it.skip('should display text to the screen', function() {
    
    game.drawText();
    
    //assert
  });
  
  it('should pause and unpause the game', function() {
    assert.equal(game.paused, false);

    game.togglePause();
    
    assert.equal(game.paused, true);

    game.togglePause();
    
    assert.equal(game.paused, false);
  });

});