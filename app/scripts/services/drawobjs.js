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
      return plane.newPlane(props);
    };
    Plane.prototype = new ObjFactory();
    Plane.prototype.constructor = Plane;


    //Factory 
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
