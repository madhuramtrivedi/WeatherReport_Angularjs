angular.module("weatherapp")
	.service("sealevelService", sealevelService);

function sealevelService(serverApi) {
	this.getSealevelData = function(id, successCallback, errorCallback) {
		return serverApi.getData("http://api.openweathermap.org/data/2.5/forecast?id=" + id + "&units=metric&APPID=7b99a68a744efdf84c73df15b9fa95c9", function(data) {
			return successCallback(data);
		}, function (err) {
			return errorCallback(err);
		});
	}
}