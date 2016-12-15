angular.module('app', []).controller('mainController', function($http, $scope) {
    scope = $scope;
    $scope.name = "angular";
    $scope.click = function() {
        $scope.name = 'hello';
    }
    $http.get('lisis.json').success(function(data) {
        console.log(data);
    })
})

function checkHandler() {
    console.log(scope);
    scope.name = 'e';
}