 var app = angular.module('app.main', []);
 // 自定义服务
 app.factory('dataService', function() {

     return {
         name: 'fromFactory'
     }
 });

 app.factory('data2Service', function(dataService) {

     return {
         name: 'form other:' + dataService.name
     }
 });

 app.controller('mainController', function($scope, dataService, data2Service) {
     $scope.name = dataService.name;
     $scope.name2 = data2Service.name;
 })