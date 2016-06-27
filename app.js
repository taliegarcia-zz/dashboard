// MODULE
var dashboardApp = angular.module('dashboardApp', ['ngRoute']);


// ROUTES
dashboardApp.config(function ($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

});


// MAIN CONTROLLER
dashboardApp.controller('mainController', ['$scope', '$log', function($scope, $log){

    $scope.controllerName = 'mainController'; // theres probably an angular way to get the controller name

}]);

// TABLE CONTROLLER
dashboardApp.controller('tableController', ['$scope', '$http', function($scope, $http){

  // Fetch & Display Data
  $scope.users = [];

  $http.get('/data.json')
    .success(function(result) {
      $scope.users = result;
    })
    .error(function(data,status){
      console.log(data);
    })

  $scope.showTable = function() {
    $scope.curPage = 0;
    $scope.usersPerPage = 15;
    $scope.numberOfPages = function() {
      return Math.ceil($scope.users.length / $scope.usersPerPage);
    };
  }

  // Sorting & Searching
  $scope.searchEmail  = '';

  $scope.sort = {
      column: 'email',
      descending: false
  };
  $scope.changeSorting = function(column) {
      var sort = $scope.sort;

      if (sort.column == column) {
          sort.descending = !sort.descending;
      } else {
          sort.column = column;
          sort.descending = false;
      }
  };

}]);

// Pagination
angular.module('dashboardApp').filter('pagination', function() {
  return function(input, start) {
  if (!input || !input.length) { return; }
    start = +start;
    return input.slice(start);
  };
});

