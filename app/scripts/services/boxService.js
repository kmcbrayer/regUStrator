'use strict';

angular.module('regUstratorApp')
  .factory('boxService', function () {
    return {
      newBox: function(props){
        var boxProperties = {
          'x': 0,
          'y': 0,
          'z': 0,
          'height':1,
          'width':1,
          'depth':1,
          'color': 0xEEEEEE,
          'image': ""
        };
        for (var key in boxProperties){
          for (var k in props){
            if (k === key){
              boxProperties[key] = props[k];
            }
          }
        }
        var geometry = new THREE.CubeGeometry(boxProperties.width,boxProperties.height,boxProperties.depth);
        if (boxProperties.image === ""){
          var material = new THREE.MeshBasicMaterial({
            'color' : boxProperties.color
          });
        } else {
          var material = new THREE.MeshBasicMaterial({
            'color' : boxProperties.color,
            'map': THREE.ImageUtils.loadTexture(boxProperties.image)
          });
        }
        var cube = new THREE.Mesh( geometry, material );
        cube.position.set(boxProperties.x,boxProperties.y,boxProperties.z);
        return cube;
      }
    }
  });