'use strict';

angular.module('regUstratorApp')
  .directive('line', function (drawObjs,utils) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
      	options: '='
      },
      link: function postLink(scope, element, attrs) {
        drawObjs.init({
          type:'Line',
          props: utils.setProperties(scope,attrs)
        });
      }
    };
  });
