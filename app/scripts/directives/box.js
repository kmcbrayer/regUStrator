'use strict';
/*
var setBoxDefaults = function(){
  return {
    x:0,
    y:0,
    z:0,
    color:'0x000000'
  };
};
*/
angular.module('regUstratorApp')
  .directive('box', function (drawObjs,objProps) {
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
          type:'Box',
          props: attrs.options
        });
      }
    };
  });
