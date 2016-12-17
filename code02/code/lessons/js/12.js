    var app = angular.module('demo.main', []);
    app.controller('mainController', function($scope) {
        $scope.infoes = {
            "zhangsan": { name: "张三", age: 18, sex: "男" },
            "lisi": { name: "李四", age: 28, sex: "男" },
            "wangwu": { name: "王五", age: 38, sex: "女" },
            "zhaoliu": { name: "赵六", age: 8, sex: "男" },
        }
    })