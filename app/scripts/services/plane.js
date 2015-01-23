'use strict';

angular.module('regUstratorApp')
  .factory('plane', function () {
    
    return {
      newPlane: function (props) {
        var planeProperties = {
          'x1':5,
          'y1':0,
          'z1':0,
          'x2':3,
          'y2':3,
          'z2':0,
          'x3':5,
          'y3':6,
          'z3':0,
          'x4':7,
          'y4':3,
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
          new THREE.PlaneGeometry(100,100,1,1),
          new THREE.MeshBasicMaterial({color:planeProperties.color,side: THREE.DoubleSide})
        );
        plane.rotation.x = -Math.PI/2;
        plane.position.y = -1;

        return plane;
      }
    };
  });
