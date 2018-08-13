angular.module("weatherapp")
	.controller("sealevelController", sealevelController);

function sealevelController($scope, $rootScope, sealevelService, $stateParams) {
	$scope.forecastData = [];
	$scope.cityName = "";
	$scope.init = function() {
		$rootScope.isBackVisible = true;
		$scope.getSealevelData();
	}
	
	$scope.getSealevelData = function() {
        sealevelService.getSealevelData($stateParams.id, $scope.onSuccessForecast, $scope.onFailureForecast);
	}
	
	$scope.onSuccessForecast = function(response) {
		$scope.forecastData = response.list;
		$scope.cityName = response.city.name;
	}
	
	$scope.onFailureForecast = function(error) {
		
	}

	$scope.filterDate = function(ms) {
		let dt = new Date(ms * 1000);
		return (dt.getUTCHours() == 9) ? true : false;
	}
	
	$scope.init();
}