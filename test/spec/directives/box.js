'use strict';

describe('Directive: box', function () {

  // load the directive's module
  beforeEach(module('regUstratorApp'));

  var element,
      scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a default box', inject(function ($compile,drawObjs,utils) {
    element = angular.element('<box></box>');
    element = $compile(element)(scope);
    var newBox = drawObjs.objs[drawObjs.objs.length-1];
    expect(newBox.position.x).toBe(0);
  }));
  it('should make a box using object properties', inject(function ($compile,drawObjs,utils){
    element = angular.element('<box props="box2"></box>');
    element = $compile(element)(scope);
    var newBox = drawObjs.objs[drawObjs.objs.length-1];
    expect(newBox.position.z).toBe(-2);
  }));
  it('should make a box using inline options', inject(function ($compile,drawObjs,utils){
    element = angular.element('<box options="{\'x\':3,\'y\':2,\'z\':3,\'color\':100}"></box>');
    element = $compile(element)(scope);
    var newBox = drawObjs.objs[drawObjs.objs.length-1];
    expect(newBox.position.z).toBe(3);
  }));
});
