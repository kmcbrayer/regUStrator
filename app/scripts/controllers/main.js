'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($scope,sceneData) {
    $scope.camera = "perspective";
    $scope.toggleCamera = function(){
    	$scope.camera = ($scope.camera === "perspective") ? "fPerson" : "perspective";
    	if ($scope.camera === "perspective"){
    		sceneData.controls = new THREE.OrbitControls( sceneData.camera );
    	}else{
    		sceneData.controls = new THREE.FirstPersonControls( sceneData.camera );
    	}
    	console.log($scope.camera);
    };
  });
