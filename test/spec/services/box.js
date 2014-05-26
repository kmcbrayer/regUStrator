'use strict';

describe('Service: box', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var box;
  beforeEach(inject(function (_box_) {
    box = _box_;
  }));

  it('should return a new Box object', function () {
    expect(box.newBox()).toEqual(box.newBox());
  });
});
