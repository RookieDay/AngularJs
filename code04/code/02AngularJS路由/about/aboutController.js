void function () {
    var appAbout = angular.module('app.about', []);
    appAbout.controller('AboutRouteController',
        [
            '$scope', '$route', '$routeParams',
            function ($scope, $route, $routeParams) {
                console.log($scope,$route,$routeParams);
                $scope.id = $routeParams['id'];
            }
        ]
    )
}();