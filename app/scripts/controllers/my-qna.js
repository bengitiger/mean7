'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:MyQnaCtrl
 * @description
 * # MyQnaCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('MyQnaCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
