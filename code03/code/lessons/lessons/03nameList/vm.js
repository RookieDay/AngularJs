 var app = angular.module('nameList.main', ['nameList.model']);
 app.controller('mainController', function($scope, $location, modelService) {
     $scope.nameList = modelService.getAll();
     $scope.invite = function() {
         var obj = modelService.invite($scope.name, $scope.phone);
         if (obj.err === 'error') {
             alert(obj.message);
         } else {
             $scope.nameList = modelService.getAll();
             $scope.name = "";
             $scope.phone = "";
         }
     }
     $scope.remove = function(userinfo) {
         modelService.remove(userinfo);
         $scope.nameList = modelService.getAll(); //务必进行一次
     }
     $scope.accept = function(userinfo) {
         userinfo.accept();
     }
     $scope.refuse = function(userinfo) {
         userinfo.refuse();
     }
 })