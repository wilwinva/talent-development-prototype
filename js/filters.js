'use strict';

/**
 * @ngdoc filter
 * @name searchResultsApp.filter:vacationBalances
 * @function
 * @description
 * # vacationBalances
 * Filter in the searchResultsApp.
 */
angular.module('pmfApp')
    .filter('monthFirst', function () {
      return function (month) {
        if (!month) {
          return;
        }//if null return
        var mon = month.slice(0, 3);
        return mon;
      };
    })
    .filter('monthLast', function () {
      return function (month) {
        if (!month) {
          return;
        }//if null return

        return month.slice(3);
      };
    })
    .filter('toCap', function () {
      return function (month) {
        if (!month) {
          return;
        }//if null return

        return month[0].toUpperCase() + month.slice(1);
      };
    })
    .filter('html', function ($sce) {
      return function (val) {
        var newValue = $sce.trustAsHtml(val);
        return newValue;
      };
    })
;
