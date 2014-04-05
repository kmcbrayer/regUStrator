'use strict';

angular.module('regUstratorApp')
  .directive('screen', function (sceneData) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        sceneData.scene = new THREE.Scene();
      	sceneData.renderer = new THREE.WebGLRenderer(); 
        sceneData.height = $(window).height();
        sceneData.width = $(window).width();
      	sceneData.renderer.setSize( sceneData.width, sceneData.height );
        //fog
        sceneData.scene.fog = new THREE.Fog( 0xffffff, 2000, 10000 );
        sceneData.renderer.setClearColor( sceneData.scene.fog.color, 1 );
      	element.append( sceneData.renderer.domElement );
      }
    };
  });
