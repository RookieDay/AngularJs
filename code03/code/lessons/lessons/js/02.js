var app = angular.module('app.main', []);
// 自定义服务
app.service('dataService', function() {
    this.name = ' from service'
});

app.provider('data2Service', function() {
    var data = {
        name: 'from provider',
        url: ""
    };
    return {
        // 服务在被依赖注入时，真正提供的对象放到$get里面
        $get: function() {
            return {
                name: data.name,
                url: data.url,
            }
        },
        // 剩下的东西都可以在AngularJS服务提供给其他组件之前对这个服务做设置
        setName: function(nameStr) {
            data.name = nameStr;
        },
        setUrl: function(url) {
            data.url = url;
        }

    }
});

// 在把这个服务提供给其他AngularJS功能组件之前，我可以对这个服务做一次配置
// 这个是Provider写法特有的功能
app.config(function(data2ServiceProvider) {
    console.log(data2ServiceProvider);
    data2ServiceProvider.setName('provider 2');
})

app.controller('mainController', function($scope, dataService, data2Service) {
    $scope.name = dataService.name;
    $scope.name2 = data2Service.name;
})