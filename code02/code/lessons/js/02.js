    var app = angular.module('demo.main', ['demo.sub']);

    var sub = angular.module('demo.sub', []);

    // 控制器的名字 + Controller
    sub.controller('nameController', function($scope) {
        $scope.name = 'this is sub'
        $scope.age = 23
        $scope.fn = function() { console.log('run') }
    })