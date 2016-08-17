'use strict';

/**
 * @ngdoc function
 * @name insideApp.module:models.insideApiModel
 * @description
 * # Models.insideApiModel
 * snl Model of the insideApp
 */
angular.module('pmfApp.models.pmfApi', ['pmfApp.mocks'])
    .service('pmfApiModel', ['$q', 'pmfApiModelMock',
      function PmfApiModel($q, pmfApiModelMock) {
        var pmfApiModel = this;

        pmfApiModel.fetch = function (service) {
          console.log('Retrieving pmf mock model data for ' + service);
          //read local data from pmfApiModel mock
          return $q.when(pmfApiModelMock[service]);
        }
      }
    ]);

