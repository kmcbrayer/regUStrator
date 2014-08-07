'use strict';

describe('Directive: triangle', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a default triangle', inject(function ($compile,drawObjs,utils) {
    element = angular.element('<triangle></triangle>');
    element = $compile(element)(scope);
    var newtriangle = drawObjs.objs[drawObjs.objs.length-1];
    expect(newtriangle.geometry.vertices[0].x).toBe(-5);
  }));
  it('should make a triangle using object properties', inject(function ($compile,drawObjs,utils){
    element = angular.element('<triangle props="triangle2"></triangle>');
    element = $compile(element)(scope);
    var newtriangle = drawObjs.objs[drawObjs.objs.length-1];
    expect(newtriangle.geometry.vertices[0].x).toBe(0);
  }));
  it('should make a triangle using inline options', inject(function ($compile,drawObjs,utils){
    element = angular.element('<triangle options="{\'x1\':3}"></triangle>');
    element = $compile(element)(scope);
    var newtriangle = drawObjs.objs[drawObjs.objs.length-1];
    expect(newtriangle.geometry.vertices[0].x).toBe(3);
  }));
});
