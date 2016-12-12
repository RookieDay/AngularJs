 var app = angular.module('app', []);
 app.controller('mainCtrl', function($scope, $http) {
     var data = $scope.data = {};
     var actions = $scope.action = {};
     actions.navTo = function(name) {
         var url = './res' + name + '.json';
         $http.get(url).success(function(response) {
             data.userinfo = response;
         })
     }
 })