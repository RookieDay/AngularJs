数据绑定：
    ng-bind 是去修改一个标签内部的innerHTML 会把里面的内容覆盖掉
    {{}} 插值表达式
    ng-model 

    <div ng-bind="name">abcdefg</div>
    <div>名字：{{name}}</div>
    <input type="text" ng-model="name">  输入框和我们scope上的name绑定到了一起 这里类型是字符串我们什么都可以输入 性能强大 假如有下面的
    <input type="number" ng-model="code">  下面的代码中没有写code , 但是我们在输入框里面输入1的时候，它自动把code放到scope对象上 这里类型是数字 我们只能输入数字  所以ng-model 会在我们输入的时候加载scope上面
    <input type="checkbox" ng-model="tureOrFalse"> 再来一些看看  这里有一个checkbox的表单空间 切换到scope 开发者工具
    <input type="radio" name="r" value="a" ng-model="r">  这里三个ng-model是一样的名字 所以scope上出现的是一个r ,选择不同的 value不一样
    <input type="radio" name="r" value="b" ng-model="r">
    <input type="radio" name="r" value="c" ng-model="r">


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
隐藏：ng-hide


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
    <button ng-click="clickHandler()">click me</button>
    <button onclick="clickHandler()">click me _ window</button>
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
