'use strict';

describe('Service: sceenData', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var sceenData;
  beforeEach(inject(function (_sceenData_) {
    sceenData = _sceenData_;
  }));

  it('should do something', function () {
    expect(!!sceenData).toBe(true);
  });

});
