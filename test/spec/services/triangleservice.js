'use strict';

describe('Service: triangleService', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var triangleService;
  beforeEach(inject(function (_triangleService_) {
    triangleService = _triangleService_;
  }));

  it('should do something', function () {
    expect(!!triangleService).toBe(true);
  });

});
