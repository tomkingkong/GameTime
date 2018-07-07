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
      playerMissiles: [],
      enemyMissiles: [],
      targets: [],
      explosions: [],
      cities: [],
      batteries: [],
      level: 1,
      enemyWeaponCount: 10,
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
    assert.equal(game.enemyMissiles.length, 0);

    game.enemyShoot();

    assert.equal(game.enemyMissiles.length, 10);
  });

  it('should let player defend themselves with missiles', function () {
    let event = {layerX: 300, layerY: 500};

    game.newGame();

    assert.equal(game.playerMissileCount, 30);

    game.playerShoot(event);
    game.playerShoot(event);
    game.playerShoot(event);

    assert.equal(game.playerMissileCount, 27);
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

  it('should loop through draw and animate methods', function() {
    let highScoreInput = 'BOB';
    let start;

    game.newGame();
    game.enemyMissiles.length = 0;

    assert.equal(game.level, 1);

    game.gameLoop(highScoreInput, start, context);

    assert.equal(game.level, 2);
  });

  it('should detect if missiles reach their target, and explode', function() {
    game.newGame();

    game.enemyShoot();

    assert.equal(game.explosions.length, 0);    

    game.enemyMissiles.forEach(missile => { 
      for (var i = 0; i < 2100; i++) {
        missile.move();
        game.objectiveDetection(game.enemyMissiles);
      }
    });

    assert.equal(game.explosions.length, 10);    
  });

  it('should allow enemy missiles to explode if they collide with explosions', function() {
    let event = {layerX: 300, layerY: 500};
    
    game.newGame();

    game.enemyShoot();

    game.playerShoot(event);

    game.enemyMissiles.forEach(missile => { 
      for (var i = 0; i < 2000; i++) {
        missile.move();
        game.explosionDetection(game.cities);
      }
    });

  });

  it('should detect weapon collision on player cities and batteries', function() {
    assert.equal(game.enemyMissiles.length, 0);
    
    game.newGame();

    game.enemyShoot();
    game.enemyShoot();
    game.enemyShoot();
    game.enemyShoot();

    assert.equal(game.enemyMissiles.length, 50);

    game.enemyMissiles.forEach(missile => { 
      for (var i = 0; i < 1800; i++) {
        missile.move();
        game.explosionDetection(game.cities);
        game.explosionDetection(game.batteries);
      }
    });
   
    /*  
    enemyShoot() is random
    This test will fail on occassion 
    */

    assert.equal(game.cities.length, 0);
    assert.equal(game.batteries.length, 0);
  });
  
  it('should end if enemey missiles destroy all player cities', function () {
    game.newGame();

    assert.deepEqual(game.cities.length, 6);

    game.enemyShoot();
    game.enemyShoot();

    /*  
    enemyShoot() is random
    This test will fail on occassion 
    */

    game.enemyMissiles.forEach(missile => { 
      for (var i = 0; i < 1800; i++) {
        missile.move();
        game.explosionDetection(game.cities);
      }
    });

    if (game.cities.length <= 0) {
      game.isGameOver = true;
    }

    assert.equal(game.isGameOver, true);
  });

  it('should run Game Over routine when player dies', function() {
    let input = {style: {display: 'none'}};
    let button = {style: {display: 'none'}};
    game.newGame();
    game.score = 1;
    game.handleGameOver(context, input, button);

    assert.equal(context.fillStyle, 'rgb(255, 0, 0)');
  });

  it('should display text to the screen', function() {
    game.newGame();

    game.drawText(context);

    assert.equal(context.fillStyle, 'rgb(255, 255, 255)');
  });
  
  it('should pause and unpause the game', function() {
    assert.equal(game.paused, false);

    game.togglePause();
    
    assert.equal(game.paused, true);

    game.togglePause();
    
    assert.equal(game.paused, false);
  });

});