describe('wiki article directive', function() {
  'use strict';

  beforeEach(module('my-app'));
  beforeEach(inject(function($templateCache) {
    $templateCache.put('templates/wiki-article.html', '{{ content }}');
  }));

  it('should request the article defined on the "src" attribute',
    inject(function($compile, $rootScope, $httpBackend) {

    $httpBackend
      .expect('GET', 'https://en.wikipedia.org/wiki/The_Matrix')
      .respond({ content: 'foobar' });

    var scope = $rootScope.$new();

    var element = angular.element('<wiki-article src="The_Matrix"></wiki-article>');
    var compiled = $compile(element)
    var linkedElement = compiled(scope);

    scope.$digest();
    $httpBackend.flush();

    var domElement = linkedElement[0];
    expect(domElement.innerHTML).toBe('foobar');
  }));
});
