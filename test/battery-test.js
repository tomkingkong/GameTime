const { assert } = require('chai');
const Context = require('../lib/Context.js');
const Battery = require('../lib/Battery.js');

describe('Battery', function () {
  let battery;
  let context;
  
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