angular.module('my-app').directive('wikiArticle', function($http) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'templates/wiki-article.html',

    link: function(scope, elem, attr) {

      attr.$observe('src', function(value) {
        $http({
          method: 'GET',
          url: 'https://en.wikipedia.org/wiki/' + value,
        }).then(function(response) {
          scope.content = response.data.content;
        });
      });

    },
  };
});
