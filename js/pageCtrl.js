'use strict';

/**
 * @ngdoc function
 * @name insideApp.directive:apiController
 * @description
 * # Api
 * Api Controller of the insideApp
 */
angular.module('pmfApp')
    .controller('PageCtrl', ['pageData', function (pageData) {
      var self = this;  // 'this' keyword unavailable inside promise callback
      self.data = pageData;
    }])
;
