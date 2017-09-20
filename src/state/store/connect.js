export const connectFactory = [
  'store',
  function(store) {
    return function($scope, selector, onChange) {
      $scope.$watch(
        () => selector(store.getState()),
        onChange
      )
    }
  }
]
