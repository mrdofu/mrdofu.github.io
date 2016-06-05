angular.module('pageslide-directive')

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider
	.when('/projects',{
		templateUrl: 'components/slidingPanel/templates/projectsTemplate.html',
		controller: 'PanelController'
	})
	.when('/about',{
		templateUrl: 'components/slidingPanel/templates/aboutTemplate.html',
		controller: 'PanelController'
	});
}])

.controller('PanelController', ['$scope', function($scope){
	$scope.checked = false;

	$scope.showPanel = function(){
		$scope.checked = true;
	}

	$scope.hidePanel = function(){
		$scope.checked = false;
	}
}]);