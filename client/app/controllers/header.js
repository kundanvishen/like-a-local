angular.module('MyApp')
  .controller('HeaderCtrl', ['$scope', '$location', '$window', function($scope, $location, $window) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
    
    $scope.isAuthenticated = function() {
      // return $auth.isAuthenticated();
    };
    
    $scope.logout = function() {
      // $auth.logout();
      delete $window.localStorage.user;
      $location.path('/');
    };
  }]);
