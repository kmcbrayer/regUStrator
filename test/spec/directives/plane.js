'use strict';

describe('Directive: plane', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a default box', inject(function ($compile,drawObjs) {
    //default plane
    element = angular.element('<plane></plane>');
    element = $compile(element)(scope);
    var newPlane = drawObjs.objs[drawObjs.objs.length-1];
    expect(newPlane.position.x).toBe(0);
    //plane using object properties
    element = angular.element('<plane props="plane1"></plane>');
    element = $compile(element)(scope);
    var newPlane = drawObjs.objs[drawObjs.objs.length-1];
    expect(newPlane.position.x).toBe(2);
  }));
});
