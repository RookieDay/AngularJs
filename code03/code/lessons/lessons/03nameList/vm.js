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
         $scope.nameList = modelService.getAll(); //务必进行一次获取新的数据
     }
     $scope.accept = function(userinfo) {
         userinfo.accept();
     }
     $scope.refuse = function(userinfo) {
         userinfo.refuse();
     }
 })

 app.directive("nlItem", function() {
     return {
         restrict: 'A',
         templateUrl: 'nl_item_tmpl1.html',
         scope: {
             nlUserinfo: "=",
             nlRemoveFn: "=",
             nlId: "@" //@绑定的是字符串
         }
     }
 })