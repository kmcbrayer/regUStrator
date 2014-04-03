'use strict';

angular.module('regUstratorApp')
  .factory('drawObjs', function () {
    //this is for all objects to be drawn on 
    var ObjFactory = function(){};

    //where we hold the objs to loop through later
    ObjFactory.prototype.objs = [];

    var Box = function(props){
      var boxProperties = {
        'x': 0,
        'y': 0,
        'z': 0,
        'height':1,
        'width':1,
        'depth':1,
        'color': 0xff0000
      }
      for (var key in boxProperties){
        for (var k in props){
          if (k === key){
            boxProperties[key] = props[k];
          }
        }
      }
      var geometry = new THREE.CubeGeometry(boxProperties.width,boxProperties.height,boxProperties.depth);
      var material = new THREE.MeshBasicMaterial({'color':boxProperties.color});
      var cube = new THREE.Mesh( geometry, material );
      cube.position.set(boxProperties.x,boxProperties.y,boxProperties.z);
      return cube;
    };
    Box.prototype = new ObjFactory();
    Box.prototype.constructor = Box;

    var Line = function(props){
      var lineProperties = {
        'x1':-10,
        'y1':0,
        'z1':0,
        'x2':10,
        'y2':0,
        'z2':0,
        'color':0xCCCCCC
      }
      for (var key in lineProperties){
        for (var k in props){
          if (k === key){
            lineProperties[key] = props[k];
          }
        }
      }
      
      var material = new THREE.LineBasicMaterial({
        color: lineProperties.color
      });
      var geometry = new THREE.Geometry();
      geometry.vertices.push( new THREE.Vector3( lineProperties.x1, lineProperties.y1, lineProperties.z1) );
      geometry.vertices.push( new THREE.Vector3( lineProperties.x2, lineProperties.y2, lineProperties.z2) );
      
      return new THREE.Line( geometry, material );
    };
    Line.prototype = new ObjFactory();
    Line.prototype.constructor = Line;
    
    ObjFactory.prototype.init = function(options){
      if (options.type === 'Box'){
        this.objs.push(new Box(options.props));
      }
      if (options.type === 'Line'){
        this.objs.push(new Line(options.props));
      }
    };
    
    return new ObjFactory();
    
  });
