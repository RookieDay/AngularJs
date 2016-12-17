(function () {
    // Model层：管理了数据
    var module = angular.module('app.model', ['app.services.jsonp']);
    module.factory('appModel', ['myJsonp', function (jsonp) {
        return {
            getTop250: function (start, count,callback) {
                var url = `http://api.douban.com/v2/movie/top250?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                jsonp(url,function(data){
                    callback(data);
                })
            },
            getInTheaters: function (start, count,callback) {
                var url = `http://api.douban.com/v2/movie/in_theaters?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                jsonp(url,function(data){
                    callback(data);
                })
            },
            getComingSoon: function (start, count,callback) {
                var url = `http://api.douban.com/v2/movie/coming_soon?start=${start}&count=${count}&callback=JSONP_CALLBACK`;
                jsonp(url,function(data){
                    callback(data);
                })
            },
            getSubject:function(id,callback){
                var url = `http://api.douban.com/v2/movie/subject/${id}?&callback=JSONP_CALLBACK`;
                jsonp(url,function(data){
                    callback(data);
                })
            }
        }
    }])

})();