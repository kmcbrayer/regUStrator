'use strict';

describe('Service: drawobjs', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var drawobjs;
  beforeEach(inject(function (_drawobjs_) {
    drawobjs = _drawobjs_;
  }));

  it('should do something', function () {
    expect(drawobjs.init({type:'Box'})).toBe('a box');
  });

});
