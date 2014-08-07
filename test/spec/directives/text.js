'use strict';

describe('Directive: text', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a default text', inject(function ($compile,drawObjs,utils) {
    element = angular.element('<text>Test Text</text>');
    element = $compile(element)(scope);
    var newtext = drawObjs.objs[drawObjs.objs.length-1];
    expect(newtext.position.x).toBe(0);
  }));
  it('should make a text using object properties', inject(function ($compile,drawObjs,utils){
    element = angular.element('<text props="text2">Test Text</text>');
    element = $compile(element)(scope);
    var newtext = drawObjs.objs[drawObjs.objs.length-1];
    expect(newtext.position.x).toBe(-2);
  }));
  it('should make a text using inline options', inject(function ($compile,drawObjs,utils){
    element = angular.element('<text options="{\'x\':3}">Test Text</text>');
    element = $compile(element)(scope);
    var newtext = drawObjs.objs[drawObjs.objs.length-1];
    expect(newtext.position.x).toBe(3);
  }));
});
