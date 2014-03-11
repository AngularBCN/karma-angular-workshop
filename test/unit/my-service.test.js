describe('AlertService service', function() {
  'use strict';

  //beforeEach(angular.mock.module('my-app'));
  beforeEach(module('my-app'));

  it('should invoke window\'s alert when invoked', function() {
    var windowMock = {
      alert: jasmine.createSpy('alert'),
    };

    module(function($provide) {
      $provide.value('$window', windowMock);
    });

    inject(function(AlertService) {
      AlertService.show('testing');
      expect(windowMock.alert).toHaveBeenCalledWith('testing');
    });
  });
});
