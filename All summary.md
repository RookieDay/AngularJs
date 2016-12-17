var app = angular.module('demo.main', ['demo.directives']);
var directives = angular.module('demo.directives', []);
directives.directive('demoHello', function() {
    return {
        restrict: "EA",
        template: '<div>this is demo-hello</div>'
    }
});
directives.directive('demoHello2', function() {
    return {
        restrict: "E"
    }
})  <input type="radio" name="r" value="c" ng-model="r">


    var app = angular.module('demo', [])
    app.controller('mainController', function ($scope) {
        $scope.name = '张三'
    })

以下是经典案例：
<!DOCTYPE html>
<html lang="en" ng-app="app">

<head>
    <meta charset="UTF-8">
    <title>用户登录页面</title>
    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/angular/angular.js"></script>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap-theme.css">
    <style>
        li {
            float: left;
        }
    </style>
</head>

<body style="padding-top: 75px;" ng-controller="login">

    <div class="container">

        <div class="row">
            <div class="col-xs-12">
                <!--//提交的时候执行这个-->
                <form name="loginForm" ng-submit="action.send()">  点击提交的时候 调用actio上的send函数
                    <table class="table">
                        <tr>
                            <td>用户名:</td>
                            输入的时候 数据会绑定到ng-model上的data对象下面
                            <td><input type="text" name="username" ng-model="data.username"></td>  
                        </tr>
                        <tr>
                            <td>密码:</td>
                            <td><input type="password" name="password" ng-model="data.password"></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <input type="submit" value="登陆">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>


        <div class="row">
            <div class="col-xs-12">
                <div>{{data}}</div>
            </div>
        </div>


    </div>

    <script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script src="ngHelper.js"></script>


    <script>
//    创建data actions对象，在actions对象上附加我们的函数 把data actions 对象放到$scope上
        var actions = {};

        actions.send = function() {
            alert('已发送登陆请求:\r\n' + data.username + '\r\n' + data.password)
        };

        // 创建模块，模块名是"app"
        angular.module('app', [])
            // 在这个模块上创建一个控制器，控制器的名字是“login”
            .controller('login', function($scope) { // 控制器的数据存在$scope  把$scope注入给我
                $scope.data = {}; // 数据 
                $scope.action = actions; // 动作（行为）
            });
    </script>
</body>

</html>

数据绑定：：
插值表达式:{{}}	
数据绑定：ng-bind	
表单控件双向绑定：ng-model
<!--指定一个控制器在什么范围内生效（这里的控制器，指的是AngularJS的控制器）-->
<div ng-controller="mainController">
    <!--ng-bind修改一个标签内部的innerHTML-->
    <div ng-bind="name">abcdefg</div>
    <div>名字：{{name}}</div>
    <input type="text" ng-model="name">
    <input type="number" ng-model="code">
    <input type="checkbox" ng-model="tureOrFalse">
    <input type="radio" name="r" value="a" ng-model="r">
    <input type="radio" name="r" value="b" ng-model="r">
    <input type="radio" name="r" value="c" ng-model="r">
</div>

<div ng-controller="subController">
    {{name}}
</div>

<script>
    var app = angular.module('demo', [])
    app.controller('mainController', function ($scope) {
        $scope.name = '张三'
    })
    app.controller('subController',function($scope){
        $scope.name = 'sub'
    })
</script>



样式绑定：
ng-class="classDefine" classDefine是一个对象，和我们css类名绑定到一起了 加css的类
ng-style="styleDefine"  样式 也可以写到一个对象里面
style="{{styleStr}}" 这种写法不推荐($scope.styleStr = "width:100px;height:100px;background:black";)
这样可以通过js对象去操作设置这样样式 不用麻烦的去修改css样式了 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>02样式绑定</title>
    <script src="../js/angular.js"></script>
    <style>
        .red {
            background: red;
        }

        .green {
            background: green;
        }
        .bd-yellow{
            border:5px solid yellow;
        }
    </style>
</head>
<!--ng-app指定一个模块名-->
<body ng-app="demo">

<!--指定一个控制器在什么范围内生效（这里的控制器，指的是AngularJS的控制器）-->
<div ng-controller="mainController">
    <!--css类绑定 和我们的css类名绑定到一起了  用一个对象 绑定到scope上--> 
    <div style="width: 100px;height: 100px;" ng-class="classDefine"></div>

    <div ng-style="styleDefine"></div>


    <!--这种并不推荐 但是有效果的写法 这种插值的方式可以放到我们的属性里面-->
    <div  style="{{styleStr}}" ></div>

    <!--下面的这种写法是无效的 angular 并不是一个真正的模版引擎 没有做模版替换 本身没有对这做模版替换 
    替换的是-他会读所有标签的属性内容 和所有标签内部的文本节点进行替换 并不会读标签本身去替换 并不会读innerhtml去替换-->
    <!--<div {{style}} = 'width:100px;height:100px;background-color:red'></div>-->
</div>

<script>
    var app = angular.module('demo', []);
    app.controller('mainController', function ($scope) {
        $scope.classDefine = { 
            red:true,  //使用那个class 设置哪个为true
            green:false,
            "bd-yellow":true
        }

        $scope.styleDefine = {
            "width":"50px",
            "height":"50px",
            "background-color":"blue"
        }
        $scope.styleStr = "width:100px;height:100px;background:black";

        $scope.style = "style";
    })
</script>

</body>
</html>


样式属性扩展：
只读：ng-readonly 区别在于提交数据的时候readonly数据是可以提交的 disable的数据是不可以提交的
不可用：ng-disable
隐藏：ng-hide  这个是隐藏了  没有删除


<div ng-controller="mainController">
    <div>
        readonly:
    <input type="checkbox" ng-model="readonly">  $scope 上没有readonly这个， 当我们点击的时候 readonly会挂到scope上 自动创建出readonly
    <input type="text" ng-readonly="readonly" value="readonly测试"> 取消check readonly变为false
    </div>
    <div>
        disabled:
        <input type="checkbox" ng-model="disable">
        <input type="text" ng-disabled="disable" value="disable测试">
    </div>
    <div>
        hide:
        <input type="checkbox" ng-model="hide">
        <input type="text" ng-hide="hide" value="nghide测试">
    </div>
</div>

<script>
    var app = angular.module('demo', []);
    app.controller('mainController', function ($scope) {

    })
</script>


事件绑定
点击：ng-click		
双击：ng-dblclick		
获得焦点：ng-focus	
失去焦点：ng-blur	
数据改变：ng-change  使用这个之前 必须在这个标签上设置ng-model  数据改变的监听 ng-modele绑定数据 数据改变触发change事件

<div ng-controller="mainController">
    <button ng-click="clickHandler()">click me</button> 这里click的作用域是scope
    <button onclick="clickHandler()">click me _ window</button>这里click的作用域是window
    <button ng-dblclick="clickHandler()">click me!</button>

    <input type="text" ng-blur="handler('blur')">
    <input type="text" ng-focus="handler('focus')">

    <!--当用ng-model绑定的数据发生改变时，触发ng-change-->
    <input type="text" ng-change="handler('change')" ng-model="change">

</div>

<script>
    var app = angular.module('demo', []);
    app.controller('mainController', function ($scope) {
        $scope.clickHandler = function () {
            alert('btn has been clicked');
        }
        $scope.handler = function (str) {
            alert(str);
        }
        $scope.change = 'change demo'
    })

    function clickHandler() {
        alert('btn has benn clicked __ window')
    }
</script>


流程控制
如果：ng-if	 控制是否显示
选项：ng-switch
<div ng-controller="mainController">
    <input type="checkbox" ng-model="ngIf">
    <div ng-if="ngIf"> ng-if demo</div>
    <!--<div ng-if="false"> ng-if demo</div> 会不显示 这个dom是被被删掉了-->
    <input type="radio" value="a" name="r" ng-model="r">
    <input type="radio" value="b" name="r" ng-model="r">
    <input type="radio" value="c" name="r" ng-model="r">
    <input type="radio" value="d" name="r" ng-model="r">
    <div ng-switch="r">  会在我们的scope加上一个r的变量
        <div ng-switch-when="a"> a </div>
        <div ng-switch-when="b"> b </div>
        <div ng-switch-when="c"> c </div>
        <div ng-switch-default> abcd </div>
    </div>
</div>

<script>
    var app = angular.module('demo', []);
    app.controller('mainController', function ($scope) {

    })
</script>



循环：ng-repeat
<div ng-app="demo.main">
    <div ng-controller="mainController">
        <table>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
            </tr>
            <tr ng-repeat="item in infoes" ng-class="{'bg-blue':$even}">
                <td>{{$index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>{{item.sex}}</td>
            </tr>
        </table>
    </div>
</div>

<script>
    var app = angular.module('demo.main', []);
    app.controller('mainController', function ($scope) {
        $scope.infoes = [
            {name: "张三", age: 18, sex: "男"},
            {name: "李四", age: 28, sex: "男"},
            {name: "王五", age: 38, sex: "女"},
            {name: "赵六", age: 8, sex: "男"},
        ]
    })
</script>
item: 数组里面的每一个元素（每一个ng-repeat生成$scope中,item都不同）item来自于"item in array"的写法，实际上item可以随便自定义它的名字。
$index:这个元素在数组里的索引
$first: 这个元素是不是数组里的第一个元素
$last:这个元素是不是数组里最后一个元素
$middle:……是不是中间的元素
$even:索引值是不是偶数
$odd:索引值是不是奇数

<trng-repeat="itemininfoes"ng-class="{'bg-blue':$even}">
绑定的数组，语法是item in array

<trng-repeat="(key,item)ininfoes"ng-class="{'bg-blue':$even}">
绑定对象，语法是(key , value) in object

如果你的repeat所绑定的数组经常发生变化，最好也加一个track by $index
<div ng-app="demo.main">
    <div ng-controller="mainController">
        <table>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
            </tr>
            <tr ng-repeat="item in infoes track by $index">
                <td>{{$index}}</td>
                <td>{{item}}</td>
                <td>{{item.age}}</td>
                <td>{{item.sex}}</td>
            </tr>
        </table>
    </div>
</div>

<script>
    var app = angular.module('demo.main', []);
    app.controller('mainController', function ($scope) {
        $scope.infoes = [1,1,2,3,4,5]
    })
</script>


ng-app 作用域
ng-controller 作用域
ng-repeat 作用域也能绑定到元素上 因为重复的元素在item上
绑定键值对的时候
<div ng-app="demo.main">
    <div ng-controller="mainController">
        <table>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
            </tr>
            <tr ng-repeat="(key,item) in infoes" ng-class="{'bg-blue':$even}">
                <td>{{key}}</td>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>{{item.sex}}</td>
            </tr>
        </table>
    </div>
</div>

<script>
    var app = angular.module('demo.main', []);
    app.controller('mainController', function ($scope) {
        $scope.infoes = {
            "zhangsan": {name: "张三", age: 18, sex: "男"},
            "lisi": {name: "李四", age: 28, sex: "男"},
            "wangwu": {name: "王五", age: 38, sex: "女"},
            "zhaoliu": {name: "赵六", age: 8, sex: "男"},
        }
    })
</script>





angular 优势：
无DOM操作，而是利用双向绑定的形式，让数据直接与DOM相关联。实现程序员只操作数据就可以更新视图的效果。
简化了开发的流程。DOM选择器越复杂，性能越低。

简单概念：
单页面应用特征：数据频繁发生变动，需要用JavaScript来更新界面的显示。在不适用框架时，这会要求程序员对DOM十分熟悉，编写非常复杂的代码，使用很多效率低的选择器。
1.AngularJS把HTML文件视作模板，程序员用AngularJS指令的方式在HTML上打标记，然后把数据等内容交给AngularJS，AngularJS帮我们把数据填到对应的位置上、帮我们把各种行为的响应函数绑定到各种控件上。
    a.AngularJS把作用域绑定到HTML元素上，在对应HTML元素上的各种指令就会与这个作用域进行关联，实现数据（或者样式）的绑定（ng-bind、{{}}、ng-style、ng-class）、双向绑定（ng-model）、事件绑定（ng-click）等等。
    b.前端模板和双向数据绑定：
2.依赖注入：在回调函数里面写指定的参数名就能获得指定的对象。（写$scope就能获得$scope，写$http就能获得$http，哪怕参数的位置改变都不会出问题，AngularJS知道调用这个函数时自己应该怎么传值）
3.MVC“程序三问”：
    数据从哪儿来？用户输入、网络访问等等，Model。
    数据去哪儿了？渲染到界面上了，View。
    发生了什么？各种事件监听和事件处理函数，Controller。但是AngularJS的Controller和标准的MVC概念有些不同，AngularJS的Controller给人一种“专门用于组织$scope的内容的”的感觉。
4.指令：在HTML文本上打的各种供AngularJS识别并进行绑定的标记。


A. angularjs 表达式
这样：{{ AngularJS Expression}}
或者这样：ng-click = "AngularJS Expression"
这样：ng-bind="AngularJS Expression"
这些指令内部输入的，其实都是AngularJS表达式。
任何AngularJS表达式在执行之后都有值，所以才能进行绑定。
AngularJS表达式执行时，通常来说会需要一个作用域。（或者是表达式总是在作用域上执行）
AngularJS的表达式可以写什么？

比如说我们有$scope = {
    num : 1,
array:[1,2,3,4,5]
data:{
},
sendMsg : function( … ){ … },
getNum:function(){ return 1}
action:{
}
}
表达式类型  书写方法                值  
取值       data.num                1
取值       action.sendMsg          function( … ){ … }
算数       data.num+1              2 
函数执行   action.getNum()         1（函数执行之后返回的值）
数组取值   data.array[3]           4
三联运算符  data.num == 1 ? 1 : 2  1
……         ……                     其他许多和JavaScript表达式类似的语法，但是不包括自增、if



B.作用域
作用域scope不止绑在controller上
首先纠正一个误解：作用域并不是AngularJS的Controller独有的东西。实际上很多指令都有自己的作用域，只不过Controller专门用于把作用域和HTML标签绑定到一起去。
那么，作用域到底是用来做什么的呢？我们需要把作用域与AngularJS表达式结合来看：
AngularJS作用域，通常来说，它的作用就是给AngularJS表达式提供一个执行环境的。
实际上，无论是插值语法{{}}、AngularJS专有属性ng-bind ng-model ng-click，它们内部放着的都是AngularJS表达式，AngularJS在需要值的时候，
会根据这些表达式的值做各种操作：替换、数据绑定、事件绑定等等。那么，这些AngularJS表达想要运行起来，必须怎样？当然是必须有一个它运行起来的环境了。这就是AngularJS的作用域。

C.作用域： 表达式求值
之前提到过AngularJS的表达式必须依附于作用域运行。那么AngularJS内部到底是怎么做的呢？
可以关注一下AngularJS框架内部的$parse服务，通过依赖注入拿到的$parse实际上是一个函数。用法很简单：
var parseFn = $parse('damo.name')
var nameOnScope = parseFn($scope)

D.作用域嵌套问题
AngularJS的作用域是可以互相嵌套的，内部作用域可以访问外部的数据，当内部作用域和外部作用域名称冲突时，使用的是内部作用域上的数值。
观察作用域对象，你会发现它其实利用了JavaScript的原型机制。

E.作用域：通知作用域数据发生了改变
使用$scope.$apply()来通知AngularJS数据发生了变化，去更新视图
$apply()
由于settimeout 使用改变scope数据，作用域上的数据变更未被AngularJS框架知晓 处理 可以使用$apply()
<div ng-controller="outerController">
    {{num}}
</div>
<script src="jquery.js"></script>
<script>
    var app = angular.module('demo.main', []);
    app.controller('outerController', function ($scope, $window) { //function ($scope, $timeout) function ($scope, $interval) function ($scope, $window)
        $scope.num = 0;

//        setTimeout(function () {
//            $scope.num = 10;
//            // 通知AngularJS应用我们的数据变更，然后更新视图
//            $scope.$apply();
//        },1000)

//        $timeout(function(){
//            $scope.num = 10;
//        },1000)

//        $interval(function(){
//            $scope.num ++
//        },100)

//        console.log($window);
//
         下面这段代码好像不可以，但是$window是存在的  可以访问$window下一些数据
//        $window.setTimeout(function(){
//            $scope.num = 10;
//        },100)

        $.get('data.json', function (data) {
            console.log(data);
            $scope.num = data.num;
            $scope.$apply();
        })
    });

</script>


F.作用域：监视数据变化
$watcher 监视的是angular的表达式 他会在scope上运行
var unregisterWatch = $scope.$watch(
'data.name',
// Todo : 数据发生变化时做什么
function( newValue, oldValue, scope){
})
这样可以监视这个作用域上的数据的变化。
其本质是，监听这个作用域上执行这个表达式后，获得的值有没有发生变化。
小实验：用$location获取当前的网址，并利用$scope监视网址的变化。

watcher:
    1.AngularJS表达式
    2.上一次对这个表达式求出来值
    3.如果和上一次表达式的值有变化，则执行我们传进去的回调函数。

    var app = angular.module('demo.main', []);
    app.controller('outerController', function ($scope, $window) {
        $scope.num = 0;
        console.log($scope);  里面有一个$$watchers属性
        var releaseFn = $scope.$watch('num', function (newValue, oldValue, scope) {
            console.log(newValue, oldValue, scope);
        });   返回一个释放watch的函数
        
        // releaseFn();  // 释放自己注册的watcher
    });    


G.监听hash变化  其实就是锚点  下面就是一个类似路由的设计
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>复习</title>
    <script src="../angular.js"></script>
</head>
<body ng-app="demo.main">
<div ng-controller="outerController">
    <a href="#/a">goto a</a>
    <a href="#/b">goto b</a>
    <a href="#/c">goto c</a>

    {{name}}
</div>
<script>
    var app = angular.module('demo.main', []);
    app.controller('outerController', function ($scope, $location) {
        console.log($location);
        // 用$location.path()能够拿到当前的路径，我们把$location放到$scope上，以便监听
        $scope.location = $location; 挂载到location上
        $scope.name = 'index';
        // 监听AngularJS表达式“location.path()” 直接上locatio.path()执行了一下  说明ng wathch监听的是表达式 而不是他的值
        $scope.$watch('location.path()', function (newValue, oldValue, scope) {
            console.log(newValue, oldValue);
            $scope.name = newValue;
        })

    });
</script>
</body>
</html>



名单案例：
    1.本质 我们维护了一个名单数组 里面存储很多人的个人信息
    2.model 名单数组
    3.$scope (vm) 上面绑定什么
        视图上要显示的数据
        受邀请人的姓名 电话 以及邀请按钮的事件处理
    4.view模版

angular factory： 自定义一个服务

var app = angular.module('demo.main', []);
app.factory('modelService', function() {
    var arr = [
        { name: "张三", phone: "18612345678", state: "邀请中" },
        { name: "李四", phone: "18612345678", state: "已接受" }
    ];
    return {
        nameList: arr,
        invite: function(userinfo) {
            arr.push(userinfo)
        }
    }
});


app.controller('mainController', function($scope, modelService) {
    console.log(modelService);
    modelService.invite({})
})


angular 的过滤器
<div ng-app="demo.main">
    <div ng-controller="mainController">
        <div ng-repeat="item in array | filter:{state:'已接受'}">
            {{item.name}},{{item.state}}
        </div>
    </div>
</div>

<script>
    var app = angular.module('demo.main', []);

    app.controller('mainController', function ($scope) {
       $scope.array =  [
           {name: "张三", phone: "18612345678", state: "邀请中"},
           {name: "李四", phone: "18612345678", state: "已接受"}
       ];
    })
</script>



所以angular创建服务的三种方法：
1.factory
    在模块上指定服务名和服务对象（可以是对象、函数、数值等等任意JavaScript变量），
    在AngularJS框架中其它用得到回调函数的地方，可以使用依赖注入的方式获得这个服务对象。用法：
    module.factory( 'demoService', function(){  
    })
    module.controller('demoController' , function( $scope, demoService ){
    })
2.service  
service和factory唯一的区别就是，service的回调函数不返回一个对象，而是把自身当做一个构造函数使用，创建出来的对象作为服务对象。
module.service(
    'demoService',
    function(){
        this.name = "demo";
        this.xxx = xxx
    }
)
3.provider  其回调函数返回的对象中 $get就是我们的服务对象 至于其他字段 我们可以在module.config里访问
module.provider('demoService',function(){
    var name = 'demo';
    return {
        $get:function(){
            return name;
        },
        setName:function(newName){
            name = newName;
        }
    }
})   



apply的内部使用  bind call
    function fn(){
        console.log(this.dataStr);
    }

    fn() 输出undefined 因为依附与window
    如果var dataStr = 'from window' fn()  输出from window 
    var obj = {dataStr：'from obj'} fn.apply(obj); -- from obj



<div ng-controller="mainController">
    {{name}}
    <br>
    {{name2}}
</div>

<script>
    var app = angular.module('app.main', []);
    // 自定义服务
    app.service('dataService', function () {
        this.name = ' from service'   会当作构造函数来使用 内部实现使用了apply
    });

    app.provider('data2Service', function () {
        var data = {
            name: 'from provider',
            url:""
        };
        return {
            // 服务在被依赖注入时，真正提供的对象放到$get里面
            $get: function () {
                return {
                    name: data.name,
                    url:data.url,
                }
            },
            // 剩下的东西都可以在AngularJS服务提供给其他组件之前对这个服务做设置
            setName: function (nameStr) {
                data.name = nameStr;
            },
            setUrl:function(url){
                data.url = url;
            }

        }
    });

    // 在把这个服务提供给其他AngularJS功能组件之前，我可以对这个服务做一次配置
    // 这个是Provider写法特有的功能
    app.config(function(data2ServiceProvider){
        console.log(data2ServiceProvider);
        data2ServiceProvider.setName('provider 2');
    })

    app.controller('mainController', function ($scope, dataService, data2Service) {
        $scope.name = dataService.name;
        $scope.name2 = data2Service.name;
    })
</script>



<body ng-app="app.main">
<div ng-controller="mainController">
    {{name}}
    <br>
    {{name2}}
</div>

<script>
    var app = angular.module('app.main', []);
    // 自定义服务
    app.service('dataService', function () {
        this.name = ' from service'
    });

    app.provider('data2Service', function () {
        var data = {
            name: 'from provider',
            url:""
        };
        return {
            // 服务在被依赖注入时，真正提供的对象放到$get里面
            $get: function () {
                return {
                    name: data.name,
                    url:data.url,
                }
            },
            // 剩下的东西都可以在AngularJS服务提供给其他组件之前对这个服务做设置
            setName: function (nameStr) {
                data.name = nameStr;
            },
            setUrl:function(url){
                data.url = url;
            }

        }
    });

    // 在把这个服务提供给其他AngularJS功能组件之前，我可以对这个服务做一次配置
    // 这个是Provider写法特有的功能  依赖注入 必须有provider
    app.config(function(data2ServiceProvider){   
        console.log(data2ServiceProvider);  输出的是Object 包含data2Service 返回出来的对象
        data2ServiceProvider.setName('provider 2');
    })

    app.controller('mainController', function ($scope, dataService, data2Service) {
        $scope.name = dataService.name;
        $scope.name2 = data2Service.name;
    })
</script>



MVVM架构思想：
Model（模型）：应用程序执行起来所需要的基础数据。
    在controller或者其他指令中，以model为基础，生成vm也就是$scope
VM视图模型：
    构建视图所需要使用的数据，在ng中，就是$scope 因为scope完全和我们的视图绑定在一起了
    双向绑定
view 视图
    其实就是我们用户面前的 根据模版生成出来的网页            

实际上AngularJS更像是个MVVM框架，那么为什么还有MVC的说法呢？因为我们可以手动的在VM上把data和action分离开来，让事件处理相关的内容更加独立。当然，会被称作是MVC框架实际上这也和AngularJS的一些历史有关。
总之，AngularJS本身更加适合做MVVM，但是真正做成什么，其实还是看程序员是如何看待它的。无论MVC还是MVVM、它们都是设计思想，只是告诉你程序应该分成哪些部分，不涉及到具体如何去写程序    


VM 和model严格分开 ， vm界面 model管理数据



angularjs 指令
第一步： EA 标签和属性打标记  打标记的方式
   <h3>用标签打标记：</h3>
<demo-hello></demo-hello>

<h3>用属性打标记：</h3>
<div demo-hello></div>
<div demo-hello2></div>
<script>
    var app = angular.module('demo.main',['demo.directives']);
    // 创建一个模块，专门存放各种指令
    var directives = angular.module('demo.directives',[]);

    directives.directive('demoHello',function(){

        // 返回一个对象，这个对象用于描述我们的指令
        return {
            restrict:"EA", // 设置这个指令可以接受元素、和属性的标记
            template:"<div>this is demo-hello directive</div>"
        }
    });

    directives.directive('demoHello2',function(){

        // 返回一个对象，这个对象用于描述我们的指令
        return {
            restrict:"E", // 设置这个指令可以接受元素、和属性的标记
            template:"<div>this is demo-hello directive</div>"
        }
    })
</script>

第二步：
<body ng-app="demo.main">

<demo-hello>这是一个demo项目</demo-hello>

<script>
    var app = angular.module('demo.main', ['demo.directives']);
    // 创建一个模块，专门存放各种指令
    var directives = angular.module('demo.directives', []);

    directives.directive('demoHello', function () {

        // 返回一个对象，这个对象用于描述我们的指令
        return {
            restrict: "EA", // 设置这个指令可以接受元素、和属性的标记
            templateUrl: "02template.html",
            transclude: true, // 内嵌用的  原来内容潜入到模版里面  代表02template.html不会替换demo-hello里面的内容 会把指令内部demo-hello 内容，全部复制到02template的ng-transclude里面
            replace: true, // 整体替换  不会包含指令的标签 demo-hello
        }
    });

</script>

02template.html
<div class="page-header">
    <h1>
        <span ng-transclude></span>
        <!--<small>Subtext for header</small>-->
    </h1>
</div>
templateUrl: 模板的路径（对应的是template传入模板的字符串）
transclude：内嵌功能。原来的标签的内容，放入到模板中指定的标签之内。
replace：替换，用模板中的元素，替换指令所指定的那个元素。

自定义指令的作用域：
<div ng-controller="mainController">
    <demo-hello title="{{title}}" sub-title="{{subTitle}}"></demo-hello>
</div>
<script>
    var app = angular.module('demo.main', ['demo.directives']);
    // 创建一个模块，专门存放各种指令
    var directives = angular.module('demo.directives', []);

    directives.directive('demoHello', function () {

        // 返回一个对象，这个对象用于描述我们的指令
        return {
            restrict: "EA", // 设置这个指令可以接受元素、和属性的标记
            templateUrl: "03template.html",
            transclude: true, // 内嵌用的
            replace: true, // 整体替换
            scope: {
                "title": "@", // @绑定的是字符串，不是AngularJS表达式
                "subTitle": "@",
            }
        }
    });

    app.controller('mainController', function ($scope) {
        $scope.title = '这个是主标题';
        $scope.subTitle = '这个是副标题'
    })
</script>
03template.html
<div class="page-header">
    <h1>
        <span>{{title}}</span>
        <small>{{subTitle}}</small>
    </h1>
</div>

自定义指令作用域2：
<h3>用标签打标记：</h3>
<div demo-hello demo-title="demo-title设置的标题"></div>

<script>
    var app = angular.module('demo.main',['demo.directives']);
    // 创建一个模块，专门存放各种指令
    var directives = angular.module('demo.directives',[]);

    directives.directive('demoHello',function(){

        // 返回一个对象，这个对象用于描述我们的指令
        return {
            restrict:"EA", // 设置这个指令可以接受元素、和属性的标记
            template:"<div><div >{{demoTitle}}</div></div>",
            // 没有replace替换指定标签的内容，有replace替换指定的整个标签
            replace:true,
            // 有transclude的时候，可以把原标签的内容，嵌入到模板上指定的标签内
            transclude:true,
            scope:{
                "demoTitle":"@" // @代表从指令所指定的这个标签上的哪一个属性上获取字符串内容
            }
        }
    });
</script>


指令 作用域就是从scope 指令所带的标签的作用域上拿上数据给了template里面所需要的部分



实现ng-bind的方法：
<div my-bind="fn()" my-demo = 'demo'></div>

<script>
    var app = angular.module('my.main', []);
    app.controller('mainController', function ($scope) {
        $scope.name = 'demo';
        $scope.fn = function(){
            return 'hello world'
        }
    });

    app.directive('myBind', function () {
        return {
            restrict: "A",
            scope: {
                myBind: "<" //单向绑定的标记，它能够执行AngularJS表达式、并取到值 声明自身的作用域
            },
            controller: function ($scope, $element,$attrs) {
                console.log($scope, $element,$attrs); //可以进行dom操作
                $element.html($scope.myBind)   //可以使用这个controller操作 他是属于指令的 
            }
        }
    })
</script>


angular 自定义指令链接 require link
<div my-bind-outer>
    <div my-bind="fn()" my-demo='demo'></div>
</div>

<!--需要一个ngmodel的 依赖-->
<input type="text" ng-change="changeHandler()" />

<script>
    var app = angular.module('my.main', []);
    app.controller('mainController', function ($scope) {
        $scope.name = 'demo';
        $scope.fn = function () {
            return 'hello angular'
        };
        $scope.changeHandler = function(data){
            console.log(data)
        }
    });

    app.directive('myBind', function () {
        return {
            restrict: "A",
            scope: {
                myBind: "<" //单向绑定的标记，它能够执行AngularJS表达式、并取到值
            },
            require:"^myBindOuter",
            link: function (scope, elem, attrs, ctrl) {
                elem.html(scope.myBind);
                console.log(ctrl);
            }
        }
    })


    app.directive('myBindOuter', function () {
        return {
            restrict: "A",
            controller: function () {
                return {
                    name: 'outer'
                }
            }
        }
    })
</script>

