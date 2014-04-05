'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($scope,sceneData) {
    $scope.cameraView = "perspective";
    $scope.toggleCamera = function(){
    	$scope.cameraView = ($scope.cameraView === "perspective") ? "fPerson" : "perspective";
    	if ($scope.cameraView === "perspective"){
    		sceneData.controls = new THREE.OrbitControls( sceneData.camera );
    	}else{
    		sceneData.controls = new THREE.FirstPersonControls( sceneData.camera );
            
    	}
    	console.log($scope.cameraView);
    };
  });
