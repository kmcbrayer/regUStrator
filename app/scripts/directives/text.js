'use strict';

angular.module('regUstratorApp')
  .directive('text', function (sceneData) {
    return {
      template: '<div ng-transclude></div>',
      restrict: 'E',
      transclude: true,
      replace: true,
      link: function postLink(scope, element, attrs) {
        // create a canvas element
        var innerText = element.html().split(/[><]/)[2];//so bad
				var canvas1 = document.createElement('canvas');
				var context1 = canvas1.getContext('2d');
				context1.font = "Bold 10px Arial";
				context1.fillStyle = "rgba(255,0,0,0.95)";
				context1.fillText(innerText, 0, 10);

				// canvas contents will be used for a texture
				var texture1 = new THREE.Texture(canvas1); 
				texture1.needsUpdate = true;

				var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
				material1.transparent = true;

				var mesh1 = new THREE.Mesh(
				  new THREE.PlaneGeometry(5, 5),
				  material1
				);
				mesh1.position.set(0,0,0);
				sceneData.scene.add( mesh1 );
      }
    };
  });
