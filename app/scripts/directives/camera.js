'use strict';

angular.module('regUstratorApp')
  .directive('camera', function (sceneData,utils) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        options: '='
      },
      link: function postLink(scope, muh_body, attrs) {
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

        sceneData.controls = new THREE.PointerLockControls( sceneData.camera);
        sceneData.scene.add(sceneData.controls.getObject());
        //bout to get messy
        var muh_body = document.body;
        var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
        muh_body.requestPointerLock = muh_body.requestPointerLock || muh_body.mozRequestPointerLock || muh_body.webkitRequestPointerLock;
        
        muh_body.addEventListener('click',function(event){
          muh_body.requestPointerLock();
        });
        var pointerlockchange = function ( event ) {
          if ( document.pointerLockElement === muh_body || document.mozPointerLockElement === muh_body || document.webkitPointerLockElement === muh_body ) {
            sceneData.controls.enabled = true;

          } else {

            sceneData.controls.enabled = false;

          }

        }
        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
          

        //sceneData.controls = new THREE.OrbitControls( sceneData.camera );
      }
    };
  });