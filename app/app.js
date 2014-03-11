var app = angular.module('my-app', []);

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

app.filter('range', function() {
  return function(input, total) {
    if (!input) return null;
    total = parseInt(total);
    for (var i = 0; i < total; i++)
      input.push(i);
    return input;
  };
});
