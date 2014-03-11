angular.module('my-app').controller('MyController', function($scope, $location) {
  'use strict';

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});
