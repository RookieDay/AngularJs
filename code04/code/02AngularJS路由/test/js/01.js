var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: './index/index_tmp1.html',
        controller: function($scope) {
            $scope.name = 'index';
        }
    }).when('/about/:name/:age', {
        templateUrl: './about/about_tmp1.html',
        controller: function($scope, $routeParams) {
            $scope.name = 'about';
            $scope.name = $routeParams.name;
            $scope.age = $routeParams.age;
            console.log($routeParams)
        }
    }).otherwise({
        redirectTo: '/index'
    })
})