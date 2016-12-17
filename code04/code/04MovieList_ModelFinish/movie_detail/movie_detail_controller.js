(function(){
    var movieDetail = angular.module('ml.movieDetail',['ml.model']);

    movieDetail.controller('MovieDetailController',function($scope,$routeParams){
        $scope.params = $routeParams;
        $scope.name = 'detail'
    })

})();