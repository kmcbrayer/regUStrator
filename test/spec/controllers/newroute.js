'use strict';

describe('Controller: NewrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('regUstratorApp'));

  var NewrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewrouteCtrl = $controller('NewrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should attach a list of newThings to the scope',function() {
    expect(scope.newThings.length).toBe(4);
  });
});
