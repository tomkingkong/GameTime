const { assert } = require('chai');
const Target = require('../lib/Target.js');

describe('Target', function () {
  let context;

  class Context {
    constructor() {
      this.canvas = "#game";
      this.fillStyle = "#000000";
    }

    beginPath() {

    }

    arc() {

    }

    fill() {

    }

    closePath(){

    }
  }

  beforeEach(() => {
   context = new Context();
  });

  it('should exist', function () {
    const target = new Target();
    
    assert.exists(target);
  });

  it('should be drawn to the canvas', function() {
    const target = new Target();

    target.draw(context);
    assert.deepEqual(ctx.fillStyle, '#000000');
  });

});