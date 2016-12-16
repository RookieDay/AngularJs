var app = angular.module('demo.main', ['demo.sub']) //模块之间互相依赖
var sub = angular.module('demo.sub', []);
sub.controller('nameController', function($scope) {
    $scope.name = "this is"
})