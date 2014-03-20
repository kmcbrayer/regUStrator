'use strict';

angular.module('regUstratorApp')
  .directive('screen', function (sceneData) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        sceneData.scene = new THREE.Scene();
      	sceneData.renderer = new THREE.WebGLRenderer(); 
      	sceneData.renderer.setSize( 700, 600 );
        //fog
        sceneData.scene.fog = new THREE.Fog( 0xffffff, 2000, 10000 );
        sceneData.renderer.setClearColor( sceneData.scene.fog.color, 1 );
      	element.append( sceneData.renderer.domElement );
      }
    };
  });
