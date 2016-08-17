/**
 * Main AngularJS Web Application
 */
angular.module('pmfApp', ['ui.router', 'ngSanitize', 'pmfApp.models.pmfApi'])
    .run(['$rootScope', '$timeout', '$state',
      function ($rootScope, $timeout, $state) {
        $rootScope.angular = angular;
        $rootScope.$on('$stateChangeSuccess', function () {
          var title = getTitleValue($state.$current.locals.globals.$title);
          console.log('title', title);
          $timeout(function () {
            $rootScope.$title = title;
          });
        });
        $timeout(function () {
          var $slices = $('.slice');
          $slices.click(function (event) {
            switch (event.currentTarget) {
              case $('#s-goal-setting')[0]:
                $state.go('goalsetting');
                break;
              case $('#s-mid-year-review')[0]:
                $state.go('midyear');
                break;
              case $('#s-career-development')[0]:
                $state.go('careerdevelopment');
                break;
              case $('#s-year-end-review')[0]:
                $state.go('yearend');
                break;
              case $('#s-ongoing-dialog')[0]:
                $state.go('dialog');
                break;
            }
          });
        }, 1000);

        function getTitleValue(title) {
          return angular.isFunction(title) ? title() : title;
      }
      }
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      // Home
          .state("intro", {
            url: '/',
            templateUrl: "partials/intro.tpl.html",
            controller: function ($rootScope, $state) {
              $rootScope.$svg = true;
              $rootScope.$activeMenu = "intro";
             }
      })
          // Pages
          .state("goalsetting", {
            url: "/goalsetting",
            templateUrl: "partials/goalsetting.tpl.html",
            controller: 'GoalsettingCtrl as goalsetting',
            resolve: {
              goalsettingData: ['pmfApiModel', '$rootScope', function (pmfApiModel, $rootScope) {
                $rootScope.$svg = true;
                $rootScope.$activeMenu = "goalsetting";
                return pmfApiModel.fetch('goalsetting');
              }],
              $title: function () {
                return 'Goal Setting';
              }
            }
      })
          .state("midyear", {
            url: "/midyear",
            templateUrl: "partials/midyear.tpl.html",
            controller: 'MidyearCtrl as midyear',
            resolve: {
              midyearData: ['pmfApiModel', '$rootScope', function (pmfApiModel, $rootScope) {
                $rootScope.$svg = true;
                $rootScope.$activeMenu = "midyear";
                return pmfApiModel.fetch('midyear');
              }],
              $title: function () {
                return 'Mid-Year Review';
              }
            }
      })
          .state("careerdevelopment", {
            url: "/careerdevelopment",
            templateUrl: "partials/careerdevelopment.tpl.html",
            controller: 'CareerdevelopmentCtrl as careerdevelopment',
            resolve: {
              careerdevelopmentData: ['pmfApiModel', '$rootScope', function (pmfApiModel, $rootScope) {
                $rootScope.$svg = true;
                $rootScope.$activeMenu = "careerdevelopment";
                return pmfApiModel.fetch('careerdevelopment');
              }],
              $title: function () {
                return 'Career Development';
              }
            }
      })
          .state("yearend", {
            url: "/yearend",
            templateUrl: "partials/yearend.tpl.html",
            controller: 'YearendCtrl as yearend',
            resolve: {
              yearendData: ['pmfApiModel', '$rootScope', function (pmfApiModel, $rootScope) {
                $rootScope.$svg = true;
                $rootScope.$activeMenu = "yearend";
                return pmfApiModel.fetch('yearend');
              }],
              $title: function () {
                return 'Year-End Review';
              }
            }
      })
          .state("dialog", {
            url: "/dialog",
            templateUrl: "partials/dialog.tpl.html",
            controller: 'DialogCtrl as dialog',
            resolve: {
              dialogData: ['pmfApiModel', '$rootScope', function (pmfApiModel, $rootScope) {
                $rootScope.$svg = true;
                $rootScope.$activeMenu = "dialog";
                return pmfApiModel.fetch('dialog');
              }],
              $title: function () {
                return 'Ongoing Dialogue & Coaching';
              }
            }
          })
          .state("timeline", {
            url: "/timeline",
            templateUrl: "partials/timeline.tpl.html",
            controller: 'TimelineCtrl as timeline',
            resolve: {
              timelineData: ['pmfApiModel', '$rootScope', function (pmfApiModel, $rootScope) {
                $rootScope.$svg = false;
                $rootScope.$activeMenu = "timeline";
                return pmfApiModel.fetch('timeline');
              }],
              $title: function () {
                return 'Activity Timeline';
              }
            }
      });
    }])
    .directive('ngSvg', function ($state, $rootScope) {
      return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, element, attr) {
          $rootScope.$on('$stateChangeSuccess',
              function (event, toState) {
                switch (toState.name) {
              case "intro":
                highlight('s-home');
                break;
              case "goalsetting":
                highlight('s-goal-setting');
                break;
                  case "midyear":
                highlight('s-mid-year-review');
                break;
                  case "careerdevelopment":
                highlight('s-career-development');
                break;
                  case "yearend":
                highlight('s-year-end-review');
                break;
                  case "dialog":
                highlight('s-ongoing-dialog');
                break;
              default:
                break;
            }
              }
          );
      }
      }
    })
;

function toggleIt($obj) {
  if ($.isArray($obj)) {
    $obj.each(function () {
      $(this).toggleClass('hide');
    });
  } else {
    $obj.toggleClass('hide');
  }
}
function toggleChild(obj) {
  var $obj = $(obj);
  var $child = $obj.next("div.dropdown-wrapper");
  toggleIt($child);
  return false;
}
function swapView(obj) {
  var $obj = $(obj);
  var $divs = $obj.nextAll("div");
  toggleIt($divs);
  return false;
}

function setTimelineMonth(obj, month) {
  var $obj = $(obj);
  var qryStr = "li." + month;

  var $calendarMonths = $(".timeline .timeline-calendar").children("div");
  $($calendarMonths.filter(".active")).removeClass("active");
  $obj.addClass('active');

  var $contentMonths = $(".timeline .timeline-content ul").children("li.row:not(.table-head)");
  $contentMonths.addClass('hide');
  var $contentMonth = $contentMonths.filter(qryStr);
  toggleIt($contentMonth);
  return false;
}
