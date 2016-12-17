  var app = angular.module('demo.main', []);

  app.controller('mainController', function($scope) {
      $scope.name = 'main controller';
      $scope.fn = function() {
          return "main controller's fn";
      }

  });

  app.directive('demoSelect', function() {

      // 描述我们的指令的对象
      return {
          restrict: "E", // 要作为一个自定义标签来使用
          template: "<div>{{demoMessage}}<br>{{demoAt}}<br>{{demoEqual}}</div>",
          scope: { // 定义内部的作用域和外部作用域怎样交互
              demoMessage: "<", // 单向绑定：可以使用AngularJS表达式
              demoAt: "@", // 字符串绑定：用{{}}来使用AngularJS表达式，但是也可以直接输入一个字符串
              demoEqual: "=" // 双向绑定：直接输入AngularJS作用域上的字段名，
                  //让指令内部和外部的作用域对应字段双向的绑定起来 指令内部操作 外部也能修改 
                  //两种方法操作scope内部的数据 1.controller 2.link
          },
          link: function(scope, elem, attrs) {
              console.log('first', scope.demoAt, scope.demoEqual);
              scope.demoEqual = '已经被指令修改';
              console.log('second', scope.demoAt, scope.demoEqual);
          }
      }
  })