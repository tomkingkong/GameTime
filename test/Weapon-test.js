const { assert } = require('chai');
const Weapon = require('../lib/Weapon.js');

describe('Weapon', function () {
  let missile;

  beforeEach(() => {
    missile = new Weapon(300, 490, 5, 5, 'rgb(0, 200, 200)', 0, 0, 0.5, {x: 300, y: 490}, { x: 30, y: 10}, 10, true);
  });

  it('should have properties', function () {
    var expectedWeapon = {
      x: 300,
      y: 490,
      width: 5,
      height: 5,
      angle: -119.35775354279127,
      color: 'rgb(0, 200, 200)',
      dx: 0,
      dy: 0,
      dv: 0.5,
      p1: {x: 300, y: 490},
      p2: {x: 30, y: 10},
      radians: -2.0831857871056343,
      xunits: -4.90261239632559,
      yunits: -8.715755371245493,
      speed: 10,
      tail: [],
      isMissile: true
    };

    assert.deepEqual(expectedWeapon, missile);
  });

  it('should move to its p2 target', function() {
    assert.equal(missile.x, 300);
    assert.equal(missile.y, 490);

    for (var i = 0; i < 55; i++) {
      missile.move();
    }

    assert.equal(Math.floor(missile.y), missile.p2.y);
    assert.equal(Math.floor(missile.x), missile.p2.x);

  });

  it('should add tail segments as it moves', function() {
    assert.deepEqual(missile.tail, []);

    missile.move();
    missile.missileTail();

    assert.deepEqual(missile.tail[0].x, missile.x - 3);

    missile.move();
    missile.missileTail();

    assert.deepEqual(missile.tail[1].x, missile.x - 3);

    assert.deepEqual(missile.tail.length, 2);

  });
});