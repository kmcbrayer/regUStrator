'use strict';

angular.module('regUstratorApp')
  .directive('box', function (drawObjs,utils) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
      	options: '='
      },
      link: function postLink(scope, element, attrs) {
        drawObjs.init({
          type:'Box',
          props: utils.setProperties(scope,attrs)
        });
      }
    };
  });
