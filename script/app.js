angular
    .module("weatherapp", ["ui.router"]);
    
angular
	.module("weatherapp")
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/weather");
		
		$stateProvider
		.state("weather", {
			url: "/weather",
			controller: "weatherController",
			templateUrl: "script/modules/weather/weather.template.html"
        })
        .state("sealevel", {
			url: "/sealevel/:id",
			controller: "sealevelController",
			templateUrl: "script/modules/sealevel/sealevel.template.html"
        });
}]);