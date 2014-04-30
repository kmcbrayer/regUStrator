'use strict';

describe('Directive: text', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<text></text>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the text directive');
  }));
});
