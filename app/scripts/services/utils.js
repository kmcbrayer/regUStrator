'use strict';

angular.module('regUstratorApp')
  .factory('utils', function (objProps,sceneData) {
    return {
      setProperties: function(scope,attrs){
        var options;
        if (!scope.options){
          options = {};
        }else{
          options = scope.options;
        }
        if (attrs.props){
          for (var i in objProps){
            if (attrs.props === objProps[i].name){
              options = objProps[i].attrs;
            }
          }
        }
        return options;
      },
      makeFPersonCam: function(){
        sceneData.camera.position.x = 0;
        sceneData.camera.position.y = 0;
        sceneData.camera.position.z = 0;
        sceneData.controls = new THREE.PointerLockControls( sceneData.camera );
        sceneData.scene.add(sceneData.controls.getObject());

        var docBody = document.body;
        var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
        docBody.requestPointerLock = docBody.requestPointerLock || docBody.mozRequestPointerLock || docBody.webkitRequestPointerLock;
        
        docBody.addEventListener('click',function(event){
          docBody.requestPointerLock();
        });
        var pointerlockchange = function ( event ) {
          if ( document.pointerLockElement === docBody || document.mozPointerLockElement === docBody || document.webkitPointerLockElement === docBody ) {
            sceneData.controls.enabled = true;

          } else {

            sceneData.controls.enabled = false;

          }

        };
        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
        
      }
    };
  });
