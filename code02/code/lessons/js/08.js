var app = angular.module('demo.main', []);
app.controller('outerController', function($scope, $window) {
    $scope.num = 0;
    console.log($scope);
    var releaseFn = $scope.$watch('num', function(newValue, oldValue, scope) {
        console.log(newValue, oldValue, scope);
    });
    // 释放自己注册的watcher
    //        releaseFn();
});