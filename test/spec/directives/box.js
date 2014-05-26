'use strict';

describe('Directive: box', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
      scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a new box object', inject(function ($compile) {
    element = angular.element('<box></box>');
    element = $compile(element)(scope);
    expect(1).toEqual(1);
  }));
});
