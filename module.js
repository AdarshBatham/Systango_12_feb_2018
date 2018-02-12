let app = angular.module("Myapp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "./index.html"
    }).when("/second", { templateUrl: "./second.html" });
});