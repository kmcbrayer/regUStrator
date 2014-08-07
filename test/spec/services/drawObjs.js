'use strict';

describe('Service: drawObjs', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var drawObjs;
  beforeEach(inject(function (_drawObjs_) {
    drawObjs = _drawObjs_;
  }));

  it('should do something', function () {
    //mostly taken car of in the directive tests
    expect(!!drawObjs).toBe(true);
  });

});
