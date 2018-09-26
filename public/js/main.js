/* Some Global Variables  */

/* Main  */
var app = angular.module('smaccoWebApp', [
  'ngRoute'
]);

/* Routes */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

    //home page
    .when("/", {templateUrl: "public/templates/smacco.html", controller: "PageCtrl"})

    // else 404
    .otherwise("/404", {templateUrl: "public/templates/404.html", controller: "PageCtrl"});
}]);

/* Controls all other Pages */
app.controller('PageCtrl', function ( $scope, /*$location, */$http) {

});
