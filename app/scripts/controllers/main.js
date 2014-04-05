'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($scope,sceneData,utils) {
    sceneData.cameraView = "perspective";
    $scope.toggleCamera = function(){
    	sceneData.cameraView = (sceneData.cameraView === "perspective") ? "fPerson" : "perspective";
    	if (sceneData.cameraView === "perspective"){
    		sceneData.controls = new THREE.OrbitControls(sceneData.camera);
    	}else{
    	  sceneData.controls = new THREE.PointerLockControls(sceneData.camera);
        utils.makeFPersonCam();
    	}
    	console.log(sceneData.cameraView);
    };
  });
