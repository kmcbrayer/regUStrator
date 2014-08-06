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
    //default box
    element = angular.element('<box></box>');
    element = $compile(element)(scope);
    var newBox = drawObjs.objs[drawObjs.objs.length-1];
    expect(newBox.position.x).toBe(0);
    //box using object properties
    element = angular.element('<box props="box2"></box>');
    element = $compile(element)(scope);
    newBox = drawObjs.objs[drawObjs.objs.length-1];
    expect(newBox.position.z).toBe(-2);
    //box using inline options
    element = angular.element('<box options="{\'x\':3,\'y\':2,\'z\':3,\'color\':100}"></box>');
    element = $compile(element)(scope);
    newBox = drawObjs.objs[drawObjs.objs.length-1];
    expect(newBox.position.z).toBe(3);
  }));
});
