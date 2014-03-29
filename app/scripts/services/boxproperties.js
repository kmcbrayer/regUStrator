'use strict';

angular.module('regUstratorApp')
  .factory('boxProperties', function () {
    return {
      'x': 0,
      'y': 0,
      'z': 0,
      'height':1,
      'width':1,
      'depth':1,
      'color': 0xff0000
    };
  });
