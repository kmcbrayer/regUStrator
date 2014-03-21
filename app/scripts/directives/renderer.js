'use strict';

angular.module('regUstratorApp')
  .directive('renderer', function (sceneData,drawObjs) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        for (var obj in drawObjs.objs){
          sceneData.scene.add(drawObjs.objs[obj]);
        }
        sceneData.render = function() {
        	requestAnimationFrame(sceneData.render);
        	sceneData.renderer.render(sceneData.scene, sceneData.camera);
          //drawObjs.objs[0].rotation.x += 0.1;
          //drawObjs.objs[0].rotation.y += 0.1;
        };
        //for now have to add events here
        sceneData.controls.addEventListener( 'change', sceneData.render );


        sceneData.render();
      }
    };
  });
