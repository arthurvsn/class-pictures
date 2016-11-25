(function () {
	'use strict';
    angular.module('app').controller('DisciplineController', ['$scope', function($scope) {
		$scope.open = false;

    $scope.toggleModal = function () {
      $scope.open = !$scope.open;
    }
	}]);
    
})();