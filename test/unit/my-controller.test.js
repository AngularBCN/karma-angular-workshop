describe('MyController behaviour', function() {
  'use strict';
  var $scope, $location, $rootScope, createController;

  beforeEach(module('my-app'));
  beforeEach(inject(function($injector) {
    $location = $injector.get('$location');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function() {
      return $controller('MyController', { $scope: $scope });
    };
  }));

  it('should have a method to check if the path is active', function() {
    var controller = createController();
    $location.path('/about');
    expect($location.path()).toBe('/about');
    expect($scope.isActive('/about')).toBe(true);
    expect($scope.isActive('/contact')).toBe(false);
  });
});
