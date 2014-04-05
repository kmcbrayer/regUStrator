'use strict';

angular.module('regUstratorApp')
  .directive('renderer', function (sceneData,drawObjs) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var time = Date.now();
        for (var obj in drawObjs.objs){
          sceneData.scene.add(drawObjs.objs[obj]);
        }
        sceneData.render = function() {
        	requestAnimationFrame(sceneData.render);
          sceneData.controls.update( Date.now() - time );
        	sceneData.renderer.render(sceneData.scene, sceneData.camera);
        };
        sceneData.render();
      }
    };
  });
