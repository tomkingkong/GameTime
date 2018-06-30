const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function () {
  it('should have properties', function () {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);

    assert.deepEqual(gamePiece, {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dv: 0.5
    });
  });

  it('should be able to collide with other objects', function () {
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const gamePiece2 = new GamePiece(58, 58, 10, 10, 'rgb(250, 0, 0)', 1)

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);

    assert.isTrue(isColliding);
  });

  it('should not collide with other objects when not touching/overlapping', function () {
    const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const gamePiece2 = new GamePiece(65, 65, 10, 10, 'rgb(250, 0, 0)', 1)

    const isColliding = gamePiece1.isCollidingWith(gamePiece2);

    assert.isFalse(isColliding);
  });

  it('should be able to move across the X axis', function() {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
  
    assert.equal(gamePiece.x, 50);

    gamePiece.move();
    gamePiece.move();
    gamePiece.move();
    gamePiece.move();
    gamePiece.move();
    gamePiece.move();

    assert.deepEqual(gamePiece.x, 53);
  });

  it.skip('', function() {

  });
})