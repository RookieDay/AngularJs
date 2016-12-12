 // 创建一个AngularJS的模块：
        // 1 把各种功能组织到一起去
        // 2 把其他模块要用得到的功能暴露出去
        // 3 引入其他模块的各种功能
        var app = angular.module('app', []); // 第一个参数是模块名 第二个参数是要依赖的其他模块的模块名

        // AngularJS用于提供数据的“功能组件”
        app.controller('mainController', function($scope) {
            $scope.name = 'Angular';
            $scope.click = function() {
                // 当我们在用AngularJS的方式绑定事件之后，
                // AngularJS是知道我们操作过数据的，并且会自动帮我们更新我们的界面
                $scope.name = 'hello world'
            }
        });

        function click() {

        }