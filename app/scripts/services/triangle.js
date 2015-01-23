'use strict';

angular.module('regUstratorApp')
  .factory('triangle', function () {
    
    return {
      newTriangle: function (props) {
        var triangleProperties = {
        'x1':-5,
        'y1':0,
        'z1':0,
        'x2':-3,
        'y2':3,
        'z2':0,
        'x3':-7,
        'y3':3,
        'z3':0,
        'color':0xff0000
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

      return new THREE.Mesh(
        geom, 
        new THREE.MeshBasicMaterial({
          color: triangleProperties.color ,
          side:THREE.DoubleSide
        }) 
      );
      }
    };
  });
