describe('WebService behaviour', function() {
  'use strict';

  beforeEach(module('my-app'));

  describe('getSomeContent method', function() {

    it('should get some content from the server', inject(function($httpBackend, WebService) {
      $httpBackend.expect('GET', '/some-content').respond({
        success: true,
        content: 'foobar',
      });

      var spy = jasmine.createSpy();
      WebService.getSomeContent().then(spy);

      $httpBackend.flush();
      expect(spy).toHaveBeenCalledWith('foobar');
    }));
  });
});
