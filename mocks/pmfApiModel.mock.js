'use strict';
/**
 * @ngdoc function
 * @name insideApp.module:insideApiModel
 * @description
 * # insideApiModel
 * mockData for insideApiModel of the insideApp
 */
angular.module('pmfApp.mocks', [])
    .service('pmfApiModelMock', ['TIMELINE_MOCK', 'GOALSETTING_MOCK', 'MIDYEAR_MOCK', 'CAREERDEVELOPMENT_MOCK', 'YEAREND_MOCK', 'DIALOG_MOCK',
      function pmfApiModelMock(TIMELINE_MOCK, GOALSETTING_MOCK, MIDYEAR_MOCK, CAREERDEVELOPMENT_MOCK, YEAREND_MOCK, DIALOG_MOCK) {
        var mockData =
        {
          timeline: TIMELINE_MOCK,
          goalsetting: GOALSETTING_MOCK,
          midyear: MIDYEAR_MOCK,
          careerdevelopment: CAREERDEVELOPMENT_MOCK,
          yearend: YEAREND_MOCK,
          dialog: DIALOG_MOCK
        };
        return mockData;
      }])
;
