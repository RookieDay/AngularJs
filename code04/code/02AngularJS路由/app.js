void function () {
    var appMain = angular.module('app.main', ['ngRoute','app.index', 'app.about']);
    appMain.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/index', {
                controller: 'IndexRouteController',
                templateUrl: './index/indexTmpl.html'
            })
            .when('/about/:id', {
                controller: "AboutRouteController",
                templateUrl: './about/aboutTmpl.html'
            })
            .otherwise({
                redirectTo: '/index'
            })

    }])
}();