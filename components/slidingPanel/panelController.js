angular.module('pageslide-directive').controller('PanelController', ['$scope', function($scope){
	$scope.checked = false;

	$scope.togglePanel = function(){
		$scope.checked = !$scope.checked;
	}
}]);