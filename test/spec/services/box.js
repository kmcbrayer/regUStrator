'use strict';

describe('Service: box', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var box;
  beforeEach(inject(function (_box_) {
    box = _box_;
  }));

  it('should build a default box with height:1', function () {
    var tBox = box.newBox();
    expect(tBox.geometry.height).toEqual(1);
  });
});
