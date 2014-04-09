'use strict';

angular.module('regUstratorApp')
  .directive('triangle', function (drawObjs,utils) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
      	options: '='
      },
      link: function postLink(scope, element, attrs) {
        drawObjs.init({
          type:'Triangle',
          props: utils.setProperties(scope,attrs)
        });
      }
    };
  });
