'use strict';

describe('Directive: line', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a default line', inject(function ($compile,drawObjs,utils) {
    element = angular.element('<line></line>');
    element = $compile(element)(scope);
    var newline = drawObjs.objs[drawObjs.objs.length-1];
    expect(newline.geometry.vertices[0].x).toBe(-10);
  }));
  it('should make a line using object properties', inject(function ($compile,drawObjs,utils){
    element = angular.element('<line props="line2"></line>');
    element = $compile(element)(scope);
    var newline = drawObjs.objs[drawObjs.objs.length-1];
    expect(newline.geometry.vertices[0].x).toBe(-2);
  }));
  it('should make a line using inline options', inject(function ($compile,drawObjs,utils){
    element = angular.element('<line options="{\'x1\':3}"></line>');
    element = $compile(element)(scope);
    var newline = drawObjs.objs[drawObjs.objs.length-1];
    expect(newline.geometry.vertices[0].x).toBe(3);
  }));
});
