'use strict';

describe('Service: triangle', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var triangle;
  beforeEach(inject(function (_triangle_) {
    triangle = _triangle_;
  }));

  it('should do something', function () {
    expect(!!triangle).toBe(true);
  });

});
