const { assert } = require('chai');
const Context = require('../lib/Context.js');
const Target = require('../lib/Target.js');

describe('Target', function () {
  let context;

  beforeEach(() => {
   context = new Context();
  });

  it('should exist', function () {
    const target = new Target();
    
    assert.exists(target);
  });

  it('should be drawn to the canvas', function() {
    const target = new Target();
    target.isExplosion = true;

    target.draw(context);
    assert.equal(context.fillStyle, 'rgb(255, 100, 0)');
  });

});