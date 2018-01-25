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
	})
	.when('/contact',{
		templateUrl: 'components/slidingPanel/templates/contactTemplate.html',
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


	$scope.projects = [
		{name:'PacmanVR', description:'Pacman as a ghost', thumbnail:'pacman.jpg', link:'https://github.com/mrdofu/PacmanVR'},
		{name:'Teddy Laserhands', description:'Shoot lasers out your hand', thumbnail:'laserhands.jpg', link:'https://github.com/mrdofu/Laserhands'},
		{name:'Frank', description:'Top-down RPG', thumbnail:'homeMap.png', link:'https://github.com/mrdofu/Frank'},
		{name:'DroneSafe', description:'Weather Map', thumbnail:'dronesafe.png', link:'https://github.com/SDobrik/DroneSafe'}
	];

	$scope.contactItems = [
		{name:'Resume', icon:'document.png', link:'img/DominicFung.pdf'},
		{name:'LinkedIn', icon:'linkedin.png', link:'https://www.linkedin.com/in/dchfung'},
		{name:'E-mail', icon:'email.png', link:'mailto:d_fung@live.ca'}
	];
}]);