'use strict';

describe('Service: line', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var line;
  beforeEach(inject(function (_line_) {
    line = _line_;
  }));

  it('should build a default line with x1:-10 and x2:10', function () {
    var tLine = line.newLine();
    expect(tLine.geometry.vertices[0].x).toBe(-10);
    expect(tLine.geometry.vertices[1].x).toBe(10);
  });

});
