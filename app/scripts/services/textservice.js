'use strict';

/**
 * @ngdoc service
 * @name regUstratorApp.textService
 * @description
 * # textService
 * Factory in the regUstratorApp.
 */
angular.module('regUstratorApp')
  .factory('textService', function () {
    
    return {
      newText: function(text, props){
        var textProperties = {
          'font':'helvetiker',
          'size':2,
          'height':0.13,
          'weight': 'normal',
          'curveSegments': 6,
          'style':'normal',
          'bevelEnabled':false,
          'bevelThickness': 10,
          'bevelSize': 8,
          'color': 0xdddddd,
          'x':0,
          'y':0,
          'z':0
        };
        for (var key in textProperties){
          for (var k in props){
            if (k === key){
              textProperties[key] = props[k];
            }
          }
        }
        var mat = new THREE.MeshBasicMaterial({
            color: textProperties.color
        });
        var textGeom = new THREE.TextGeometry(text,{
            font:textProperties.font,
            size:textProperties.size,
            height:textProperties.height,
            weight: textProperties.weight,
            curveSegments: textProperties.curveSegments,
            style: textProperties.style,
            bevelEnabled: textProperties.bevelEnabled,
            bevelThickness: textProperties.bevelThickness,
            bevelSize: textProperties.bevelSize
          });
        var text = new THREE.Mesh(textGeom,mat);
        text.position.set(textProperties.x,textProperties.y,textProperties.z);
        return text;
      }
    };
  });
