const { assert } = require('chai');
const Game = require('../lib/Game.js');
const Battery = require('../lib/Battery.js');
 
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
    closePath() {}
    fillRect() {}
    fillText() {}
    rect() {}
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
      highScore: {playerName: 'TCK', level: 0, score: 0},
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

  it('should set the player\'s missile count based on battery missile count', function() {
    assert.equal(game.playerMissileCount, 0);

    const battery1 = new Battery(0, 490, 60, 60, 'rgb(200, 200, 0)', false, 10);
    const battery2 = new Battery(270, 490, 70, 60, 'rgb(200, 200, 0)', false, 10);
    const battery3 = new Battery(540, 490, 60, 60, 'rgb(200, 200, 0)', false, 10);
    game.batteries = [battery1, battery2, battery3]

    game.setPlayerMissileCount();

    assert.equal(game.playerMissileCount, 30);
  });
  
  it('should shoot a volley of enemy missiles at player upon new game or level', function () {
    assert.deepEqual(game.enemyMissiles.length, 0);

    game.enemyShoot();

    assert.deepEqual(game.enemyMissiles.length, 5);
  });
  
  it('should end if enemey missiles destroy all player cities', function () {
    game.newGame();

    assert.deepEqual(game.cities.length, 6);

    for (var i = 0; i < 4; i++) {
      game.enemyShoot();
    }

    //Enemy Fire is random
    //This test will fail if a city is not targeted

    game.enemyMissiles.forEach(missile => { 
      for (var i = 0; i < 1500; i++) {
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
    let event = {layerX: 300, layerY: 500};

    game.newGame();

    assert.equal(game.playerMissileCount, 30);

    game.shoot(event);
    game.shoot(event);
    game.shoot(event);

    assert.equal(game.playerMissileCount, 27);
  });

  it('should loop through draw and animate methods', function() {
    let highScoreInput = 'BOB';
    let start;

    game.gameLoop(highScoreInput, start, context);

    assert.exists(game.gameLoop);
  });
  
  it.skip('should detect if enemy missiles hit explosions and cause more explosions', function() {
    game.newGame();
    game.explosionDetection(game.enemyMissiles);

    //game.explode(missile);
    //assert
  });
  
  it('should find the correct battery to shoot from', function() {
    let event;

    game.newGame();

    event = {layerX: 420, layerY: 500};
    
    game.findBattery(event);

    assert.deepEqual(game.findBattery(event), { x: 570, y: 490 }); //battery 3 position
    
    event = {layerX: 220, layerY: 500};
    
    game.findBattery(event);

    assert.deepEqual(game.findBattery(event), { x: 300, y: 490 }); //battery 2 position
    
    event = {layerX: 80, layerY: 500};
    
    game.findBattery(event);

    assert.deepEqual(game.findBattery(event), { x: 30, y: 490 }); //battery 1 position

  });
  
  it('should run Game Over routine when player dies', function() {
    let input = {style: {display: 'none'}};
    let button = {style: {display: 'none'}};
    game.newGame();
    game.score = 1;
    game.handleGameOver(context, input, button);

    assert.equal(context.fillText(), 'THE END');

  });

  it.skip('should display text to the screen', function() {
    game.drawText();


  });
  
  it('should pause and unpause the game', function() {
    assert.equal(game.paused, false);

    game.togglePause();
    
    assert.equal(game.paused, true);

    game.togglePause();
    
    assert.equal(game.paused, false);
  });

});