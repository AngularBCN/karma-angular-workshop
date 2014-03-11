angular.module('my-app').directive('wikiArticle', function($http) {
  'use strict';

  return {
    restrict: 'E',
    templateUrl: 'templates/wiki-article.html',

    scope: {
      article: '=src',
    },

    link: function(scope, attr, elem) {
      scope.$watch('article', function(value) {
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
