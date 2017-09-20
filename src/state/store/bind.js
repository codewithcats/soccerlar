export const bindFactory = [
  'connect',
  function(connect) {
    return function($scope, selector, prop) {
      connect($scope, selector, value => {
        $scope[prop] = value
      })
    }
  }
]
