var app = angular.module('demo.main', ['demo.directives']);
var directives = angular.module('demo.directives', []);
directives.directive('demoHello', function() {
    return {
        restrict: "EA",
        template: '<div>this is demo-hello</div>'
    }
});
directives.directive('demoHello2',function(){
    return {
        restrict:"E"
    }
})