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



// DATA CONTROLLER
var mockData = [{
                  name: "Raphael Bryant",
                  email: "libero@egetdictumplacerat.ca",
                  company: "Ridiculus Mus Corp.",
                  id: "93EC3B4E-2B6B-88E2-2AD3-441E4E16AF6E",
                  score: 16
                },
                {
                  name: "Jennifer Levine",
                  email: "diam@tinciduntduiaugue.org",
                  company: "Aliquet LLP",
                  id: "4BF750A0-880B-34FB-7117-36A08B731257",
                  score: 15
                }]


dashboardApp.controller('dataController', ['$scope', '$http', function($scope, $http){

    $scope.users = [];

    $http.get('/data.json')
      .success(function(result) {
        $scope.users = result;
      })
      .error(function(data,status){
        console.log(data);
      })
}]);

