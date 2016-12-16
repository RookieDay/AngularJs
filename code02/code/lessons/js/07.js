var app = angular.module('demo.main', []);
app.controller('outerController', function($scope, $window) {
    $scope.num = 0;

    //        setTimeout(function () {
    //            $scope.num = 10;
    //            // 通知AngularJS应用我们的数据变更，然后更新视图
    //            $scope.$apply();
    //        },1000)

    //        $timeout(function(){
    //            $scope.num = 10;
    //        },1000)

    //        $interval(function(){
    //            $scope.num ++
    //        },100)

    //        console.log($window);
    //
    //        $window.setTimeout(function(){
    //            $scope.num = 10;
    //        },100)

    $.get('data.json', function(data) {
        console.log(data);
        $scope.num = data.num;
        $scope.$apply();
    })
});