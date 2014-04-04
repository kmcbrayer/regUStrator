'use strict';

angular.module('regUstratorApp')
  .directive('camera', function (sceneData,utils) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        options: '='
      },
      link: function postLink(scope, element, attrs) {
        sceneData.camera = new THREE.PerspectiveCamera( 75, 700/ 600, 0.1, 1000 );
        attrs.options = utils.setProperties(scope,attrs);
        sceneData.camera.position.x = attrs.options.x;
        sceneData.camera.position.y = attrs.options.y;
        sceneData.camera.position.z = attrs.options.z;

        sceneData.controls = new THREE.OrbitControls( sceneData.camera );
        
      }
    };
  });
