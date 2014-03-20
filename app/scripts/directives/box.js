'use strict';
var setBoxDefaults = function(){
  return {
    x:0,
    y:0,
    z:0,
    color:'0x000000'
  };
};

angular.module('regUstratorApp')
  .directive('box', function (drawObjs) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if (!attrs.options){
          attrs.options = setBoxDefaults();
        }else{
          attrs.options = eval("("+attrs.options+")");
        }
        drawObjs.init({
          type:'Box',
          x:attrs.options.x,
          y:attrs.options.y,
          z:attrs.options.z,
          color:attrs.options.color,
        });
      }
    };
  });
