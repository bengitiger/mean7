'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
