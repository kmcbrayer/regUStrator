'use strict';

angular.module('regUstratorApp')
  .directive('screen', function (sceneData) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        sceneData.scene = new THREE.Scene();
        sceneData.camera = new THREE.PerspectiveCamera( 75, 700/ 600, 0.1, 1000 );
      	sceneData.renderer = new THREE.WebGLRenderer(); 
      	sceneData.renderer.setSize( 700, 600 );
        sceneData.renderer.setClearColor();
        
     	  element.append( sceneData.renderer.domElement );
      }
    };
  });
