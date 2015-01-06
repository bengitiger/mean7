'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:MyFollowingCtrl
 * @description
 * # MyFollowingCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('MyFollowingCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
