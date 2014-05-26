'use strict';

describe('Service: line', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var line;
  beforeEach(inject(function (_line_) {
    line = _line_;
  }));

  it('should do something', function () {
    expect(!!line).toBe(true);
  });

});
