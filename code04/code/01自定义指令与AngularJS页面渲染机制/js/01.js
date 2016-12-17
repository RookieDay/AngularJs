var template = `
<div class="dropdown" ng-controller="mainController">
    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        Dropdown
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li ng-repeat="(key,value) in options"><a ng-href="{{value}}">{{key}}</a></li>
    </ul>
</div>
    `;


var app = angular.module('demo.main', []);
app.controller('mainController', function($scope) {
    $scope.options = {
        "主页": "#/index",
        "关于": "#/about"
    }
    $scope.getOptions = function() {
        return {
            "主页": "#/index",
            "关于": "#/about"
        };
    }
})


app.directive('demoSelect', function() {
    return {
        retrict: 'E',
        template: template,
        scope: {
            demoOptions: '<'
        }
    }
})