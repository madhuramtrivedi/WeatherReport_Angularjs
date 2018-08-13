angular.module("weatherapp")
	.controller("weatherController", weatherController);

function weatherController($scope, $rootScope, $location, weatherService) {
	self = this;
	$scope.cityWeatherData = [];
	self.timestr = "";
	
	self.init = function() {
		$rootScope.isBackVisible = false;
		self.getWeatherData();
	}
		
	self.getWeatherData = function() {
        weatherService.getCityWeather(self.onSuccessWeather, self.onFailureWeather);
	}
	
	self.onSuccessWeather = function(response) {
		$scope.cityWeatherData = response.list;
	}
	
	self.onFailureWeather = function(error) {
		
	}

	$scope.convertToTime = function(ms) {
		let date = new Date(ms * 1000);
		return date.getUTCHours() + ":" + date.getUTCMinutes() + ":"+ date.getUTCSeconds();
	}

	$scope.checkSealevel = function(id){
		$location.path('/sealevel/'+id);
	}
	
	self.init();
}