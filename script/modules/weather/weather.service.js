angular.module("weatherapp")
	.service("weatherService", weatherService);

function weatherService(serverApi, appConfig) {
	this.getCityWeather = function(successCallback, errorCallback) {
		return serverApi.getData(appConfig.weatherUrl, function(data) {
			return successCallback(data);
		}, function (err) {
			return errorCallback(err);
		});
	}
}