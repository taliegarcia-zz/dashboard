// MODULE
var dashboardApp = angular.module('dashboardApp', ['ngRoute'])


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
    $scope.controllerName = 'tableController';

    $scope.users = [];

    $http.get('/data.json')
      .success(function(result) {
        $scope.users = result;
      })
      .error(function(data,status){
        console.log(data);
      })

}]);
