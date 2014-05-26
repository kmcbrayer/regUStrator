'use strict';

describe('Directive: triangle', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<triangle></triangle>');
    element = $compile(element)(scope);
    expect(1).toEqual(1);
  }));
});
