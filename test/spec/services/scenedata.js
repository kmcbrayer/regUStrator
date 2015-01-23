'use strict';

describe('Service: sceneData', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var sceneData;
  beforeEach(inject(function (_sceneData_) {
    sceneData = _sceneData_;
  }));

<<<<<<< HEAD:test/spec/services/scenedata.js
  it('should do something', function () {
=======
  it('should build a new empty object to hold sceneData', function () {
>>>>>>> feature/write_tests:test/spec/services/sceendata.js
    expect(!!sceneData).toBe(true);
  });

});
