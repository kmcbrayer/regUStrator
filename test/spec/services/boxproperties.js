'use strict';

describe('Service: boxProperties', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var boxProperties;
  beforeEach(inject(function (_boxProperties_) {
    boxProperties = _boxProperties_;
  }));

  it('should do something', function () {
    expect(!!boxProperties).toBe(true);
  });

});
