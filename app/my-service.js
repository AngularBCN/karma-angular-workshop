angular.module('my-app').factory('AlertService', function($window) {
  'use strict';

  function show(message) {
    $window.alert(message);
  }

  return {
    show: show,
  };
});
