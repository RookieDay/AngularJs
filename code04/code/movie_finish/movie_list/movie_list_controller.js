(function() {
    var movieList = angular.module('ml.movieList', ['ml.model']);
    movieList.controller('MovieListController', function($scope, $routeParams, mlModel) {
        // $scope.params = $routeParams;
        // $scope.name = "list";
        var category = $routeParams.category;
        var page = $routeParams.page;
        var listCount = 12;
        var start = (page - 1) * listCount;

        var vm = $scope.vm = {};
        vm.data = [];

        switch (category) {
            case "top250":
                mlModel.getTop250(start, listCount, function(data) {
                    vm.data = data.subjects;
                });
                break;
        }
    })
})();