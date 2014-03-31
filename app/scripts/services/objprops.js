'use strict';

angular.module('regUstratorApp')
  .factory('objProps', function () {
    return [
      {'name':'box1',
        'attrs':{
          'x':-1,
          'y':2,
          'z':3,
          'color':0x00ff00
        }
      },
      {'name':'box2',
        'attrs':{
          'z':-2,
          'width':2,
        }
      },
      {'name':'line1',
        'attrs':{
          'color':0xDDDDDD
        }
      }

      ];
  });
