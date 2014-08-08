'use strict';

/**
 * @ngdoc service
 * @name regUstratorApp.triangleService
 * @description
 * # triangleService
 * Factory in the regUstratorApp.
 */
angular.module('regUstratorApp')
  .factory('triangleService', function () {
    return {
      newTriangle: function(props){
        var triangleProperties = {
          'x1':0,
          'y1':0,
          'z1':0,
          'x2':-3,
          'y2':3,
          'z2':0,
          'x3':3,
          'y3':3,
          'z3':0,
          'color':0xff0000,
          'image': ""
        };
        for (var key in triangleProperties){
          for (var k in props){
            if (k === key){
              triangleProperties[key] = props[k];
            }
          }
        }
        var geom = new THREE.Geometry();

        geom.vertices.push( new THREE.Vector3(triangleProperties.x1,triangleProperties.y1,triangleProperties.z1) );
        geom.vertices.push( new THREE.Vector3(triangleProperties.x2,triangleProperties.y2,triangleProperties.z2) );
        geom.vertices.push( new THREE.Vector3(triangleProperties.x3,triangleProperties.y3,triangleProperties.z3) );

        geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
        geom.computeFaceNormals();
        if (triangleProperties.image === "") {
          var mat = new THREE.MeshBasicMaterial(
            {
              color: triangleProperties.color ,
              side:THREE.DoubleSide
            }
          );
        } else {
          var mat = new THREE.MeshBasicMaterial(
            {
              color: triangleProperties.color ,
              side:THREE.DoubleSide,
              map: THREE.ImageUtils.loadTexture(triangleProperties.image)
            }
          );
        }

        return new THREE.Mesh(
          geom, 
          mat
        );
      }
  };
});
