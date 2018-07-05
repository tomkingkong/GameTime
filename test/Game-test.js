const { assert } = require('chai');
const Game = require('../lib/Game.js');
 
describe('Game', function () {
  let game;

  beforeEach(() => {
    game = new Game();
    game.playerMissileCount = 30;
  });

  it('should exist', function () {
    assert.exists(game);
  });

  it('Game should store all the things', function () {
    var expectedGame = {
      missiles: [],
      enemyMissiles: [],
      targets: [],
      explosions: [],
      cities: [],
      batteries: [],
      lvl: 1,
      enemyWeaponCount: 5,
      playerMissileCount: 30,
      isGameOver: false,
      score: 0,
      highScore: {playerName: 'TCK', level: 1, score: 0}
    };

    assert.deepEqual(expectedGame, game);
  });
  
  it('Game should start with cities and batteries on newGame()', function () {
    
    assert.deepEqual(game.cities.length, 0);
    assert.deepEqual(game.batteries.length, 0);
    
    game.newGame();

    assert.deepEqual(game.cities.length, 6);
    assert.deepEqual(game.batteries.length, 3);
  });
  
  it('Game should shoot missiles at player upon new game or level', function () {
    assert.deepEqual(game.enemyMissiles.length, 0);

    game.enemyShoot();
    
    assert.deepEqual(game.enemyMissiles.length, 5);
  });
  
  it('Game should end if enemey missiles destroy all player cities', function () {
    game.newGame();

    assert.deepEqual(game.cities.length, 6);
    
    game.enemyShoot();
    game.enemyShoot();
    game.enemyShoot();
    game.enemyShoot();
    game.enemyShoot();

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
  
  it.skip('Game should', function () {
     
  });
  
  it.skip('Game should', function () {
     
  });
  
  it.skip('Game should', function () {
     
  });

});