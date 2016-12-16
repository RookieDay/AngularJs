var app = angular.module('demo.main', []);
app.controller('mainController', function($scope, $parse) {
    $scope.num = 1;
    $scope.fn = function() {
        console.log('run');
        return 'run';
    }
    $scope.data = {
        num: 1,
        str: 'he',
        arr: [1, 2, 3]
    }
    var parseFn = $parse(fn());
    var value = parseFn($scope);
    console.log(value);
})