'use strict';

angular.module('regUstratorApp')
  .factory('drawObjs', function () {
    //this is for all objects to be drawn on 
    var ObjFactory = function(){};

    //where we hold the objs to loop through later
    ObjFactory.prototype.objs = [];

    // box for testing
    var Box = function(x,y,z,color){
      //var geometry = new THREE.CubeGeometry(ifExists(x,1),ifExists(y,1),ifExists(z,1));
      var geometry = new THREE.CubeGeometry(2,2,2);
      var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
      var cube = new THREE.Mesh( geometry, material );

      return cube;
    };
    Box.prototype = new ObjFactory();
    Box.prototype.constructor = Box;

    //you cant always get what you want
    //put in utils, maybe factory
    var ifExists = function(want, get){
      if (want !== null){
        return want;
      }else{
        return get;
      }
    };
    
    ObjFactory.prototype.init = function(options){
      var self = this;
      if (options.type === 'Box'){
        self.objs.push(new Box(options.x,options.y,options.z,options.color));
      }
      return new Box(options.x,options.y,options.z,options.color);
    };
    
    return new ObjFactory();
    
  });
