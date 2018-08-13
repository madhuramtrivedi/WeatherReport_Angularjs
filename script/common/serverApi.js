angular
	.module('weatherapp')
	.factory('serverApi', ['$http', function($http) {
        return {
            getData: function(url, successCallback, errorCallback) {
                var getUrl = url;
                $http.get(getUrl).success(function(data, status, headers) {
                    successCallback(data);                    
                }).error(function(data, status, headers) {
                    if (errorCallback) {
                      errorCallback(data);
                    }
                });
            },
            postData: function(url, data, successCallback, errorCallback) {
                var postUrl = url;
                $http.post(postUrl, data).success(function(data, status, headers) {
                    successCallback(data);
                }).error(function(data, status, headers) {
                    if (errorCallback)
                    {
                      errorCallback(data);
                    }
                });
            }
        };
}]);