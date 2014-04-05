'use strict';

angular.module('regUstratorApp')
  .directive('camera', function (sceneData,utils) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        options: '='
      },
      link: function postLink(scope, docBody, attrs) {
        var cameraDefaults = {
          'x':0,
          'y':3,
          'z':10,
          'fov':75,
          'aspect':sceneData.width/ sceneData.height,
          'near':0.1,
          'far':100,
        };
        sceneData.camera = new THREE.PerspectiveCamera( 
          cameraDefaults.fov, 
          cameraDefaults.aspect,
          cameraDefaults.near,
          cameraDefaults.far
        );

        sceneData.camera.position.x = cameraDefaults.x;
        sceneData.camera.position.y = cameraDefaults.y;
        sceneData.camera.position.z = cameraDefaults.z;
        
        sceneData.controls = new THREE.OrbitControls(sceneData.camera);
        
      }
    };
  });