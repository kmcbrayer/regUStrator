'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($scope,sceneData,utils) {
    sceneData.cameraView = 'perspective';
    $scope.toggleCamera = function(){
      sceneData.cameraView = (sceneData.cameraView === 'perspective') ? 'fPerson' : 'perspective';
      if (sceneData.cameraView === 'perspective'){
        utils.cleanCam();
        utils.makeOrbitCam();
      }else{
        sceneData.controls = new THREE.PointerLockControls(sceneData.camera);
        utils.makeFPersonCam();
      }
    };
  });
