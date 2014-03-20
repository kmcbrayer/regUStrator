'use strict';

angular.module('regUstratorApp')
  .factory('drawObjs', function () {
    //this is for all objects to be drawn on 
    var ObjFactory = function(){};

    //where we hold the objs to loop through later
    ObjFactory.prototype.objs = [];

    var Box = function(x,y,z,color){
      var geometry = new THREE.CubeGeometry(1,1,1);

      var material = new THREE.MeshBasicMaterial({'color':color});
      var cube = new THREE.Mesh( geometry, material );
      cube.position.set(x,y,z); 

      return cube;
    };
    Box.prototype = new ObjFactory();
    Box.prototype.constructor = Box;

    var Line = function(x1,y1,z1,x2,y2,z2,color){
      var material = new THREE.LineBasicMaterial({
        color: 0x111111
      });
      var geometry = new THREE.Geometry();
      geometry.vertices.push( new THREE.Vector3( x1, y1, z1) );
      geometry.vertices.push( new THREE.Vector3( x2, y2, z2) );
      var line = new THREE.Mesh( geometry, material );
      
      return line;
    };
    Line.prototype = new ObjFactory();
    Line.prototype.constructor = Line;
    
    ObjFactory.prototype.init = function(options){
      if (options.type === 'Box'){
        this.objs.push(new Box(options.x,options.y,options.z,options.color));
      }
      if (options.type === 'Line'){
        this.objs.push(new Line(options.x1,options.y1,options.z1,options.x2,options.y2,options.z2),options.color);
      }
    };
    
    return new ObjFactory();
    
  });
