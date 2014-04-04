'use strict';

angular.module('regUstratorApp')
  .factory('utils', function (objProps) {
    return {
      setProperties: function(scope,attrs){
        var options;
        if (!scope.options){
          options = {};
        }else{
          options = scope.options;
        }
        if (attrs.props){
          for (var i in objProps){
            if (attrs.props === objProps[i].name){
              options = objProps[i].attrs;
            }
          }
        }
        return options;
      }
    };
  });
