'use strict';

angular.module('regUstratorApp')
  .directive('camera', function (sceneData,utils) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        options: '='
      },
      link: function postLink(scope, attrs) {
        var cameraDefaults = {
          'x':0,
          'y':5,
          'z':20,
          'fov':75,
          'aspect':sceneData.width/ sceneData.height,
          'near':0.1,
          'far':1000,
        };
        sceneData.camera = new THREE.PerspectiveCamera( 
          cameraDefaults.fov, 
          cameraDefaults.aspect,
          cameraDefaults.near,
          cameraDefaults.far
        );
        utils.makeOrbitCam();
      }
    };
  });