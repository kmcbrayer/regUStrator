'use strict';

angular.module('regUstratorApp')
  .directive('box', function (drawObjs,objProps) {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
      	options: '='
      },
      link: function postLink(scope, element, attrs) {
        if (!attrs.options){
          attrs.options = {};
        }else{
        	attrs.options = scope.options;
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
