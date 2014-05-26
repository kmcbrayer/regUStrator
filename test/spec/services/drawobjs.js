'use strict';

describe('Service: drawObjs', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var drawObjs;
  beforeEach(inject(function (_drawObjs_) {
    drawObjs = _drawObjs_;
  }));

  it('should make a box object', function () {
    expect(!!drawObjs).toBe(true);
  });

});