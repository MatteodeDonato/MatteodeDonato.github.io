var myapp = angular.module('myapp', ["ui.router"])
console.log("updated???");
myapp.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/page1")

  $stateProvider
    .state('page1', {
        url: "/page1",
        templateUrl: "page1.html"
    })
      .state('page1.list', {
          url: "/list",
          templateUrl: "page1.list.html",
          controller: function($scope){
            $scope.items = [];
            for(var i = 0; i <= 4; i++){
              $scope.items[i] = 4-i;
            }
          }
      })

    .state('page2', {
        url: "/page2",
        templateUrl: "page2.html",
        controller: function($scope){
          $scope.message = "Welcome to the second page!";
          $scope.someText = "";
        }

    })
      .state('page2.list', {
          url: "/list",
          templateUrl: "page2.list.html",
          controller: function($scope){
            $scope.things = [];
            for(var i = 0; i <= 4; i++){
              $scope.things[i] = 4-i;
            }

          }
      })
})
