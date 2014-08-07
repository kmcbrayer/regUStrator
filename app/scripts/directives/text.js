'use strict';

angular.module('regUstratorApp')
  .directive('text', function (drawObjs,utils) {
    return {
      template: '<div ng-transclude></div>',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        options: '='
      },
      link: function postLink(scope, element, attrs) {
        var innerText = element.html().split(/[><]/)[2];//so bad
        drawObjs.init({
          type:'Text',
          props: utils.setProperties(scope,attrs),
          text: innerText
        });
      }
    };
  });
