'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:TechAreaCtrl
 * @description
 * # TechAreaCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('TechAreaCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
