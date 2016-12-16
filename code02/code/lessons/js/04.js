    var app = angular.module('demo.main', []);
    app.controller('nameController', function($scope, $parse) {
        $scope.num = 1;

        // 1. 调用$parse获得一个函数
        var parseFn = $parse('num');
        // 2. 把作用域传给那个函数，然后获取表达式的值
        var value = parseFn($scope)

    })

    function demoFn() {
        var a = 1;
        var b = 2;
        console.log(a);

    }