describe('Notify service', function() {
  'use strict';

  beforeEach(angular.mock.module('my-app'));

  it('should invoke window\'s alert when invoked', function(Notify) {
    var windowMock = {
      alert: jasmine.createSpy('alert'),
    };

    module(function($provide) {
      $provide.value('$window', windowMock);
    });

    inject(function(Notify) {
      Notify('testing');
      expect(windowMock.alert).toHaveBeenCalledWith('testing');
    });
  });
});
