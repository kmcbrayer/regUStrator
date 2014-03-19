'use strict';

angular.module('regUstratorApp')
  .directive('renderer', function (sceneData,drawObjs) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        for (var obj in drawObjs.objs){
          sceneData.scene.add(obj);
        }
        console.log(sceneData.scene);

        sceneData.render = function() {
        	requestAnimationFrame(sceneData.render);
        	sceneData.renderer.render(sceneData.scene, sceneData.camera);
        };
        //sceneData.renderer.setClearColor( sceneData.scene.fog.color, 1 );
        sceneData.render();
      }
    };
  });
