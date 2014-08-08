'use strict';

angular.module('regUstratorApp')
  .factory('drawObjs', function (objProps,boxService,lineService,triangleService,planeService,textService) {
    //this is for all objects to be drawn on 
    var ObjFactory = function(){};

    //where we hold the objs to loop through later
    ObjFactory.prototype.objs = [];
    
    ObjFactory.prototype.init = function(options){
      if (options.type === 'Box'){
        this.objs.push(boxService.newBox(options.props));
      }
      if (options.type === 'Line'){
        this.objs.push(lineService.newLine(options.props));
      }
      if (options.type === 'Triangle'){
        this.objs.push(triangleService.newTriangle(options.props));
      }
      if (options.type === 'Plane'){
        this.objs.push(planeService.newPlane(options.props));
      }
      if (options.type === 'Text'){
        this.objs.push(textService.newText(options.text,options.props));
      }
    };
    
    return new ObjFactory();
    
  });
