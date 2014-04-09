'use strict';

angular.module('regUstratorApp')
  .directive('plane', function (drawObjs,utils) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
      	options: '='
      },
      link: function postLink(scope, element, attrs) {
      	drawObjs.init({
          type:'Plane',
          props: utils.setProperties(scope,attrs)
        });
      }
    };
  });
