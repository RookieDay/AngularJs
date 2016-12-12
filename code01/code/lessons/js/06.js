//    4. 创建一个AngularJS模块，并把一个控制器附加到模块上
//    （
//    模块的创建：var app = angular.module('app',[])
//    控制器的创建： app.controller('mainController',function($scope){  }
//    ）

var app = angular.module('app', []);
app.controller('mainController', function($scope) {
    $scope.data = {};
    $scope.action = {
        test: 1
    };
    $scope.action.send = function() {
        alert($scope.data.username + ' : ' + $scope.data.password);
    }



})