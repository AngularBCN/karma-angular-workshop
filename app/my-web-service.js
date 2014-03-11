angular.module('my-app').factory('WebService', function($http) {
  'use strict';

  function getSomeContent() {
    return $http({
      method: 'GET',
      url: '/some-content',
    }).then(function(response) {
      return response.data.content;
    });
  }

  return {
    getSomeContent: getSomeContent,
  };
});
