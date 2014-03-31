'use strict';
var setLineDefaults = function(){
  return {
    x1:-10,
    y1:0,
    z1:0,
    x2:0,
    y2:10,
    z2:0,
    color:'0x0000ff'
  };
};

angular.module('regUstratorApp')
  .directive('line', function (drawObjs) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if (!attrs.options){
          attrs.options = {};
        }else{
          attrs.options = eval("("+attrs.options+")");
        }
        if (attrs.props){
          for (var i in objProps){
            if (attrs.props === objProps[i].name){
              attrs.options = objProps[i].attrs;
            }
          }
        }
        drawObjs.init({
          type:'Line',
          props: attrs.options
        });
      }
    };
  });
