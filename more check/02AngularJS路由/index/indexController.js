void function () {
    var appIndex = angular.module('app.index', []);
    appIndex.controller('IndexRouteController',
        [
            '$scope', '$route', '$routeParams',
            function ($scope, $route, $routeParams) {
                console.log($scope,$route,$routeParams);
            }
        ]
    )
}();