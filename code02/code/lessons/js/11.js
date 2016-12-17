    var app = angular.module('demo.main', []);
    app.controller('mainController', function($scope) {
        $scope.infoes = [
            { name: "张三", age: 18, sex: "男" },
            { name: "李四", age: 28, sex: "男" },
            { name: "王五", age: 38, sex: "女" },
            { name: "赵六", age: 8, sex: "男" },
        ]
    })