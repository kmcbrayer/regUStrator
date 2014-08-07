'use strict';

describe('Directive: plane', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a default plane', inject(function ($compile,drawObjs) {
    element = angular.element('<plane></plane>');
    element = $compile(element)(scope);
    var newPlane = drawObjs.objs[drawObjs.objs.length-1];
    expect(newPlane.position.x).toBe(0);
  }));
  it('should make a plane using object properties', inject(function($compile,drawObjs){
    element = angular.element('<plane props="plane1"></plane>');
    element = $compile(element)(scope);
    var newPlane = drawObjs.objs[drawObjs.objs.length-1];
    expect(newPlane.geometry.width).toBe(200);
  }));
  it('should make a plane using inline options', inject(function($compile,drawObjs){
    element = angular.element('<plane options="{\'size_x\':300}"></plane>');
    element = $compile(element)(scope);
    var newPlane = drawObjs.objs[drawObjs.objs.length-1];
    expect(newPlane.geometry.width).toBe(300);
  }));
});
