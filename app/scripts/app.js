'use strict';

angular.module('regUstratorApp', [
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newroute', {
        templateUrl: 'views/newroute.html',
        controller: 'NewrouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
