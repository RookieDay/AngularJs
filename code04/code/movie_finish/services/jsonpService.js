void

function() {
    var mlJsonp = angular.module('ml.services.jsonp', []);
    mlJsonp.factory('mlJsonp', function($rootScope) {
        var count = 0;
        return function(url, callback) {
            var scriptElem = document.createElement('script');
            var callbackName = '_callback_' + count++;
            var jsonpUrl = url.replace('JSONP_CALLBACK', callbackName);
            scriptElem.src = jsonpUrl;
            window[callbackName] = function(data) {
                callback(data);
                $rootScope.$apply();
                window.document.body.removeChild(scriptElem);
            }
            window.document.body.appendChild(scriptElem);
        }
    })
}();