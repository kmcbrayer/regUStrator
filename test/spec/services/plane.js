'use strict';

describe('Service: plane', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var plane;
  beforeEach(inject(function (_plane_) {
    plane = _plane_;
  }));

  it('should build a default plane with width: 100', function () {
    var tPlane = plane.newPlane();
    expect(tPlane.geometry.width).toEqual(100);
  });

});
