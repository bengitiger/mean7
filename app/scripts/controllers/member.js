'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:MemberCtrl
 * @description
 * # MemberCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('MemberCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
