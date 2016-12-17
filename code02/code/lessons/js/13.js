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