    // 我们应用中的model
    var model = [
        { name: "张三", phone: "18612345678", state: "邀请中" },
        { name: "李四", phone: "18612342178", state: "已接受" }
    ];


    var app = angular.module('nameList.main', []);
    app.controller('mainController', function($scope, $location) {
        $scope.nameList = model;
        $scope.invite = function() {
            var name = $scope.name;
            var phone = $scope.phone;

            var userInfo = { name: name, phone: phone, state: "邀请中" };
            var isOk = true;
            if (!name || !phone) {
                isOk = false;
            }

            model.forEach(function(value, index, array) {
                // && 两个都为真时，才为真，否则是假
                // console.log(phone)
                // console.log(!(value.phone == phone));
                isOk = isOk && (!(value.phone == phone));
            });
            if (isOk) {
                model.push(userInfo);
            } else {
                alert("数据不合法")
            }
            $scope.name = "";
            $scope.phone = "";
        }
        $scope.remove = function(userInfo) {
            var index = model.indexOf(userInfo);
            model.splice(index, 1);
        }
        $scope.accept = function(userinfo) {
            userinfo.state = '已接受'
        };

        $scope.refuse = function(userinfo) {
            userinfo.state = '已拒绝'
        };
        $scope.location = $location;
        $scope.$watch('location.path()', function(newValue, oldValue) {
            switch (newValue) {
                case '/all':
                    $scope.nameList = model;
                    break;
                case '/invite':
                    $scope.nameList = model.filter(function(value) {
                        return value.state == '邀请中'
                    });
                    break;
                case '/accept':
                    $scope.nameList = model.filter(function(value) {
                        return value.state == '已接受'
                    });
                    break;
                case '/refuse':
                    $scope.nameList = model.filter(function(value) {
                        return value.state == '已拒绝'
                    });
                    break;
            }
        })
    })