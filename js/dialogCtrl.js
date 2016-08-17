'use strict';

/**
 * @ngdoc function
 * @name insideApp.directive:apiController
 * @description
 * # Api
 * Api Controller of the insideApp
 */
angular.module('pmfApp')
    .controller('DialogCtrl', ['dialogData', function (dialogData) {
      var self = this;  // 'this' keyword unavailable inside promise callback
      self.data = dialogData;
    }])
;
