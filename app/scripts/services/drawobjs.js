'use strict';

angular.module('regUstratorApp')
  .factory('drawObjs', function (boxProperties) {
    //this is for all objects to be drawn on 
    var ObjFactory = function(){};

    //where we hold the objs to loop through later
    ObjFactory.prototype.objs = [];

    var Box = function(props){
      var geometry = new THREE.CubeGeometry(props.height,props.width,props.depth);
      var material = new THREE.MeshBasicMaterial({'color':props.color});
      var cube = new THREE.Mesh( geometry, material );
      cube.position.set(props.x,props.y,props.z);
      return cube;
    };
    Box.prototype = new ObjFactory();
    Box.prototype.constructor = Box;

    var makeBoxProperties = function(props){
      for (var key in boxProperties){
        for (var k in props){
          if (k === key){
            boxProperties[key] = props[k];
          }
        }
      }
      return boxProperties;
    };

    var Line = function(x1,y1,z1,x2,y2,z2,color){
      var material = new THREE.LineBasicMaterial({
        color: color
      });
      var geometry = new THREE.Geometry();
      geometry.vertices.push( new THREE.Vector3( x1, y1, z1) );
      geometry.vertices.push( new THREE.Vector3( x2, y2, z2) );
      
      return new THREE.Line( geometry, material );
    };
    Line.prototype = new ObjFactory();
    Line.prototype.constructor = Line;
    
    ObjFactory.prototype.init = function(options){
      if (options.type === 'Box'){
        var props = makeBoxProperties(options.props);
        console.log(props);
        this.objs.push(new Box(props));
      }
      if (options.type === 'Line'){
        this.objs.push(
          new Line(options.x1,options.y1,options.z1,options.x2,options.y2,options.z2,options.color)
        );
      }
    };
    
    return new ObjFactory();
    
  });
