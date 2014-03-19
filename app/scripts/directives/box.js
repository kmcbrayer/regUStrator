'use strict';

angular.module('regUstratorApp')
  .directive('box', function (sceneData,drawObjs) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var obj = drawObjs.init({
          type:'Box',
          x:1,
          y:2,
          z:3,
          color:null
        });
        sceneData.scene.add(obj);
      }
    };
  });
