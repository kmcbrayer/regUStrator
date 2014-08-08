'use strict';

/**
 * @ngdoc service
 * @name regUstratorApp.planeService
 * @description
 * # planeService
 * Factory in the regUstratorApp.
 */
angular.module('regUstratorApp')
  .factory('planeService', function () {

    return {
      newPlane: function(props){
        //TODO: make vertices accessable
        var planeProperties = {
          'position_y': 0,
          'rotation_x': -Math.PI/2,
          'size_x': 100,
          'size_y': 100,
          'color':0x00CCDD
        };
        for (var key in planeProperties){
          for (var k in props){
            if (k === key){
              planeProperties[key] = props[k];
            }
          }
        }
        
        var plane = new THREE.Mesh( 
          new THREE.PlaneGeometry(
            planeProperties.size_x,
            planeProperties.size_y
          ),
          new THREE.MeshBasicMaterial({color:planeProperties.color,side: THREE.DoubleSide})
        );
        plane.rotation.x = -Math.PI/2;
        plane.position.y = planeProperties.position_y;

        return plane;
      }
    };
  });
