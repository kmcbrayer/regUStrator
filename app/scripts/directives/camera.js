'use strict';

angular.module('regUstratorApp')
  .directive('camera', function (sceneData) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        sceneData.camera = new THREE.PerspectiveCamera( 75, 700/ 600, 0.1, 1000 );
        //camera 
        if (!attrs.options){
          attrs.options = {x:2,y:2,z:5};
        }else{
          attrs.options = eval("("+attrs.options+")");
        }
        sceneData.camera.position.x = attrs.options.x;
        sceneData.camera.position.y = attrs.options.y;
        sceneData.camera.position.z = attrs.options.z;

        sceneData.controls = new THREE.OrbitControls( sceneData.camera );
        
      }
    };
  });
