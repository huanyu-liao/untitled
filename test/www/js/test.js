/**
 * Created by leo on 2015/10/12.
 */
angular.module('test', [])
.controller('MyController',function($scope, $timeout) {
  var updateClock = function () {
    $scope.clock = new Date();
    $timeout(function () {
      updateClock();
    }, 1000)
  };
  updateClock();
})
