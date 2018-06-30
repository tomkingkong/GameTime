const { assert } = require('chai');
const Weapon = require('../lib/Weapon.js');

describe('Weapon', function () {
  let weapon;

  beforeEach(() => {
    weapon = new Weapon (50, 50, 10, 10, 'rgb(0, 200, 0', 0, 1, 1, {x:100, y:100}, {x:200, y:200}, 1)
  });

  it('should have properties', function () {
    var expectedWeapon = {
      x: 50,
      y: 50,
      width: 10,
      height: 10,
      color: 'rgb(0, 200, 0',
      dx: 0,
      dv: 0.5,
      p1: {x:100, y:100},
      p2: {x:200, y:200},
      speed: 1
    }
    assert.deepEqual(expectedWeapon, weapon); 
  });

  it.skip('should be able to fire()', function() {
    const missiles = [missile]; //available missiles
    weapon.fire();
    //create
  });

  it.skip('fire() should not work if no missiles', function() {
    const missiles = [missile, missile, missile];
    weapon.fire();

  });

  it('should be able to explode()', function() {
    assert.equal(weapon.explode(), true)
    
  });

  it.skip('', function () {

  });

  it.skip('should explode() on collision ', function() {
    const block = new Weapon (58, 58, 10, 10, 'rgb(0, 200, 0', 0)
    
    const isColliding = weapon.isCollidingWith(block);

    assert.isTrue(isColliding);
  });
})