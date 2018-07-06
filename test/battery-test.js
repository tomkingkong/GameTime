const { assert } = require('chai');
const Battery = require('../lib/Battery.js');

describe('Battery', function () {
  let battery;

  class Context {
    constructor() {
      this.canvas = "#game";
      this.fillStyle = "#000000";
    }
  }

  beforeEach(() => {
    battery = new Battery();
    context = new Context();
  });

  it('should exist', function () {
    assert.exists(battery);
  });

  it('should have a missile count', function() {
    assert.equal(battery.missileCount, 10);
  });

});