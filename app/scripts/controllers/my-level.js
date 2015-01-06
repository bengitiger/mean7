'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:MyLevelCtrl
 * @description
 * # MyLevelCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('MyLevelCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
