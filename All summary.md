数据绑定：
    ng-bind 是去修改一个标签内部的innerHTML 会把里面的内容覆盖掉
    {{}} 插值表达式
    ng-model 
    
    <div ng-bind="name">abcdefg</div>
    <div>名字：{{name}}</div>
    <input type="text" ng-model="name">  输入框和我们scope上的name绑定到了一起 这里类型是字符串我们什么都可以输入 性能强大 假如有下面的
    <input type="number" ng-model="code">  下面的代码中没有写code , 但是我们在输入框里面输入1的时候，它自动把code放到scope对象上 这里类型是数字 我们只能输入数字
    <input type="checkbox" ng-model="tureOrFalse"> 再来一些看看  这里有一个checkbox的表单空间 切换到scope 开发者工具
    <input type="radio" name="r" value="a" ng-model="r">  这里三个ng-model是一样的名字 所以scope上出现的是一个r ,选择不同的 value不一样
    <input type="radio" name="r" value="b" ng-model="r">
    <input type="radio" name="r" value="c" ng-model="r">


    var app = angular.module('demo', [])
    app.controller('mainController', function ($scope) {
        $scope.name = '张三'
    })

