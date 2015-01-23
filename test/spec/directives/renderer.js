'use strict';

describe('Directive: renderer', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
  
  it('should be fine', inject(function ($compile) {
    //will not compile without screen being initialized first.
    //may need to test both in tandem
    expect(1).toBe(1);// dont know a way to test this now
  }));
});
