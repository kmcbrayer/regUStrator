'use strict';

describe('Service: lineService', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var lineService;
  beforeEach(inject(function (_lineService_) {
    lineService = _lineService_;
  }));

  it('should do something', function () {
    expect(!!lineService).toBe(true);
  });

});