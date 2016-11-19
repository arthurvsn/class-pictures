(function () {
	'use strict';
	angular.module('app.createClass').controller('CreateClassCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

		var init;

		init = function() {
			$scope.currentDiscipline = {};
		};

		$scope.save = function() {
			//POST
		};

		$scope.cancel = function() {
			window.location = '#/main';
		};

		return init();
		
	}]);

})();