'use strict';

describe('Service: textService', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var textService;
  beforeEach(inject(function (_textService_) {
    textService = _textService_;
  }));

  it('should do something', function () {
    expect(!!textService).toBe(true);
  });

});
