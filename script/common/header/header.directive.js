angular.module("weatherapp")
	.directive("headerBlock", headerBlock);

function headerBlock($window, $rootScope) {
	var headerObj = {};
	headerObj.restrict = "E";
	headerObj.templateUrl = "script/common/header/header.template.html";
	
	headerObj.link = function(scope, element, attr) {
		scope.isBackVisible = $rootScope.isBackVisible;
		
		scope.productGoBack = function() {
			$window.history.back();
		}
	};
	return headerObj;
}