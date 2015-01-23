'use strict';

angular.module('regUstratorApp')
  .directive('text', function (sceneData) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log(element);
      }
    };
  });
