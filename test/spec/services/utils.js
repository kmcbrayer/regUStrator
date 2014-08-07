'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var utils;
  beforeEach(inject(function (_utils_) {
    utils = _utils_;
  }));

  it('should do something', function () {
    expect(!!utils).toBe(true);
    //should do more tests here but if the directives work the SetProperties works,
    //I am planning on remove the camera switching anyway that was just for testing
  });

});
