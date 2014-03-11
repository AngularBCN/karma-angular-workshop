angular.module('my-app').filter('range', function() {
  return function(input, total) {
    if (!input)
      return null;

    total = parseInt(total);

    for (var i = 0; i < total; i++)
      input.push(i);

    return input;
  };
});
