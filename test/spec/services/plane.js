'use strict';

describe('Service: plane', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var plane;
  beforeEach(inject(function (_plane_) {
    plane = _plane_;
  }));

  it('should do something', function () {
    expect(!!plane).toBe(true);
  });

});
