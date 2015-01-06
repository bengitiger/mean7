'use strict';

/**
 * @ngdoc function
 * @name meanstackApp.controller:RankingCtrl
 * @description
 * # RankingCtrl
 * Controller of the meanstackApp
 */
angular.module('meanstackApp')
  .controller('RankingCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
