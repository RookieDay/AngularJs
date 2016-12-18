var appTest = angular.module('app.test', []);
appTest.controller('mainController', function($scope, $http) {
    // var url = "http://api.douban.com/v2/movie/in_theaters?city=北京&count=1";
    // $http.get(url)
    //     .success(function(data) {
    //         $scope.data = data;
    //     })
    //     .error(function(error) {
    //         console.log(error);
    //     })
    var url = "http://api.douban.com/v2/movie/in_theaters?city=北京&count=1&callback=JSON_CALLBACK";
    $http.jsonp(url)
        .success(function(data) {
            $scope.data = data;
        })
        .error(function(error) {
            console.log(error);
        })
})