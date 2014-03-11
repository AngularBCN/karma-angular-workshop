var app = angular.module('my-app');

app.factory('Notify', function($window) {

  function text(message) {
    $window.alert(message);
  }

  return {
    text: text,
  };
});

app.controller('MyController', function($scope, Notify) {
  $scope.name = 'World';

  $scope.$watch('name', function(value) {
    Notify.text(value);
  });
});
