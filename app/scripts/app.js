'use strict';

/**
 * @ngdoc overview
 * @name meanstackApp
 * @description
 * # meanstackApp
 *
 * Main module of the application.
 */
angular
  .module('meanstackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider','$routeProvider', '$httpProvider', '$logProvider', function ($stateProvider, $urlRouterProvider, $routeProvider, $httpProvider, $logProvider) {

    $logProvider.debugEnabled(true);

      /**
       * @description
       * This is ui-router config
       * use $urlRouteProvider, $stateProvider
       */
      $urlRouterProvider.otherwise(function($injector, $location){
        if($location.host() != "server") { // for httpBackend
          return "/";
        }
      });

    $stateProvider
      .state('main', {
         url: '/',
         templateUrl: 'views/main.html',
         controller: 'MainCtrl'
      })
      .state('mylevel', {
        url: '/mylevel',
        templateUrl: 'views/mylevel.html',
        controller: 'MyLevelCtrl'
      })
      .state('myqna', {
        url: '/myqna',
        templateUrl: 'views/myqna.html',
        controller: 'MyQnaCtrl'
      })
      .state('myfollowing', {
        url: '/myfollowing/{userId:[0-9]{1,4}}',
        templateUrl: 'views/myfollowing.html',
        controller: 'MyFollowingCtrl'
      })
      .state('techarea', {
        url: '/techarea/{techId:[0-9]{1,4}}',
        templateUrl: 'views/techarea.html',
        controller: 'TechAreaCtrl'
      })
      .state('gururanking', {
        url: '/gururanking',
        templateUrl: 'views/gururanking.html',
        controller: 'RankingCtrl'
      })
      .state('gurumember', {
        url: '/gurumember',
        templateUrl: 'views/gurumember.html',
        controller: 'MemberCtrl'
      });

          /*
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/mylevel', {
        templateUrl: 'views/mylevel.html',
        controller: ''
      })
      .when('/myqna', {
        templateUrl: 'views/myqna.html',
        controller: ''
      })
      .when('/myfollowing', {
        templateUrl: 'views/myfollowing.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
      */


  }])
  .run(['$rootScope', '$state', '$stateParams',
    function( $rootScope, $state, $stateParams ) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      /**
       * @description
       * Reset error when a new view is loaded
       */
      $rootScope.$on('$viewContentLoaded', function() {

      });

      /**
       * @description
       * when we use 'ui-router' for routing, we must use $statChangeStart or $stateChangeSuccess
       * instead of $routeChangeStart
       */
      $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {

      });
  }]);
