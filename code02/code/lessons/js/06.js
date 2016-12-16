//    var app = angular.module('demo.main', []);
//    app.controller('nameController', function($scope, $parse, $rootScope) {
//        $scope.num = 1;
//        console.log($rootScope);
//        console.log($scope)
//    });


var app = angular.module('demo.main', []);
app.controller('outerController', function($scope, $parse, $rootScope) {
    $scope.num = 1;
    $scope.name = 'outer';
    // 输出一下我们的模块上的“根作用域”
    console.log($rootScope);
    console.log($scope)
});

app.controller('innerController', function($scope) {
    $scope.num = 2;
})