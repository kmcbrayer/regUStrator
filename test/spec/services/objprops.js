'use strict';

describe('Service: objProps', function () {

  // load the service's module
  beforeEach(module('regUstratorApp'));

  // instantiate service
  var objProps;
  beforeEach(inject(function (_objProps_) {
    objProps = _objProps_;
  }));

  it('should do something', function () {
    //this is fine
    expect(!!objProps).toBe(true);
  });

});
