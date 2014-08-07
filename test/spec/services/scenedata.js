'use strict';

describe('Service: sceneData', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var sceneData;
  beforeEach(inject(function (_sceneData_) {
    sceneData = _sceneData_;
  }));

  it('should do something', function () {
    expect(!!sceneData).toBe(true);
  });

});
