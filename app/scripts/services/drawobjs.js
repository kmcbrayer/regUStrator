'use strict';

angular.module('regUstratorApp')
  .factory('drawObjs', function (objProps) {
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
      };
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
      };
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

    var Triangle = function(props){
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
    };
    Triangle.prototype = new ObjFactory();
    Triangle.prototype.constructor = Triangle;

    var Plane = function(props){
      var planeProperties = {
        'position_y': 0,
        'rotation_x': -Math.PI/2,
        'rotation_y': 0,
        'position_x': 0,
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
          planeProperties.size_y,
          planeProperties.position_x,
          planeProperties.position_y
        ),
        new THREE.MeshBasicMaterial({color:planeProperties.color,side: THREE.DoubleSide})
      );
      plane.rotation.x = -Math.PI/2;
      plane.position.y = planeProperties.position_y;

      return plane;
    };
    Plane.prototype = new ObjFactory();
    Plane.prototype.constructor = Plane;
    
    ObjFactory.prototype.init = function(options){
      if (options.type === 'Box'){
        this.objs.push(new Box(options.props));
      }
      if (options.type === 'Line'){
        this.objs.push(new Line(options.props));
      }
      if (options.type === 'Triangle'){
        this.objs.push(new Triangle(options.props));
      }
      if (options.type === 'Plane'){
        this.objs.push(new Plane(options.props));
      }
    };
    
    return new ObjFactory();
    
  });
