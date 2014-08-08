'use strict';

describe('Service: boxService', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var boxService;
  beforeEach(inject(function (_boxService_) {
    boxService = _boxService_;
  }));

  it('should do something', function () {
    expect(!!boxService).toBe(true);
  });

});