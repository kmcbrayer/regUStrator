'use strict';
var setLineDefaults = function(){
  return {
    x1:0,
    y1:0,
    z1:0,
    x2:20,
    y2:2,
    z2:2,
    color:'0x000000'
  };
};

angular.module('regUstratorApp')
  .directive('line', function (drawObjs) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if (!attrs.options){
          attrs.options = setLineDefaults();
        }else{
          attrs.options = eval("("+attrs.options+")");
        }
        drawObjs.init({
          type:'Line',
          x1:attrs.options.x1,
          y1:attrs.options.y1,
          z1:attrs.options.z1,
          x2:attrs.options.x2,
          y2:attrs.options.y2,
          z2:attrs.options.z2,
          color:attrs.options.color,
        });
      }
    };
  });
