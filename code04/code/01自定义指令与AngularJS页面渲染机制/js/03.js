alert("开始！");
var app = angular.module('demo.main', []);
app.controller('mainController', function($scope) {
    $scope.name = 'hello'
});
app.directive('demoOuter', function() {
    return {
        restrict: "EA",
        template: "<div><div>This is outer directive.name:{{demoName}}</div><demo-inner demo-name='demoName'>开始的inner</demo-inner></div>",
        scope: {
            demoName: "<"
        },
        compile: function(elem, attrs) {
            alert('outer compile');
            return {
                pre: function() {
                    alert('outer pre link');

                },
                post: function() {
                    alert('outer post link');

                }
            }
        },
        controller: function($scope) {
            alert('outer controller');
            console.log($scope.demoName);
            return {
                message: "this is from outer."
            }
        }
    }
});
app.directive('demoInner', function() {
    return {
        template: "<div>This is inner directive.inner name:{{demoName}}</div>",
        require: "^demoOuter",
        scope: {
            demoName: "<"
        },
        compile: function(elem, attrs) {
            alert('inner compile');
            return {
                pre: function() {
                    alert('inner pre link');

                },
                post: function() {
                    alert('inner post link');

                }
            }
        },
        controller: function($scope) {
            alert('inner controller');
            return {
                message: "this is from inner."
            }
        }
    }
});