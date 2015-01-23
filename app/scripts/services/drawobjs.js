'use strict';

angular.module('regUstratorApp')
  .factory('drawObjs', function (
    objProps,
    box,
    line,
    triangle,
    plane
    ) {
    //this is for all objects to be drawn on 
    var ObjFactory = function(){};

    //where we hold the objs to loop through later
    ObjFactory.prototype.objs = [];

    //Box constructor
    var Box = function(props){
      return box.newBox(props);
    };
    Box.prototype = new ObjFactory();
    Box.prototype.constructor = Box;

    //Line constructor
    var Line = function(props){
      return line.newLine(props);
    };
    Line.prototype = new ObjFactory();
    Line.prototype.constructor = Line;

    //Triangle constructor
    var Triangle = function(props){
      return triangle.newTriangle(props);
    };
    Triangle.prototype = new ObjFactory();
    Triangle.prototype.constructor = Triangle;

    //Plane constructor
    var Plane = function(props){
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
    };
    Plane.prototype = new ObjFactory();
    Plane.prototype.constructor = Plane;

    //Text constructor
    var Text = function(text, props){
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
    Text.prototype = new ObjFactory();
    Text.prototype.constructor = Text;

    
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
      if (options.type === 'Text'){
        this.objs.push(new Text(options.text,options.props));
      }
    };
    
    return new ObjFactory();
    
  });
