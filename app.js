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

}]);
