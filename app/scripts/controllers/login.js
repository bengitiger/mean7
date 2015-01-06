'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('LoginCtrl',  ['$scope',function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
