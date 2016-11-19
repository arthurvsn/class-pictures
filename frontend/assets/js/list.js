(function () {
	'use strict';
	angular.module('app.list').controller('ListCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

		var init;
		$scope.disciplinesList = [];

		init = function() {
			$scope.disciplinesList = [{
				name: 'nome 1',
				clas: 'class',
				comments: 'jasndiansd'
			}];
			$scope.divIndex = 0;
			$scope.loadClass();
		};

		$scope.loadClass = function() {
			//GET
		};

		$scope.editClass = function() {
			$scope.selected = angular.copy(this.discipline);
			$scope.divIndex = 1;
		};

		$scope.deleteClass = function() {
			//delete
		};

		$scope.cancelEdit = function() {
			$scope.selected = {};
			$scope.divIndex = 0;
		};

		$scope.saveSelected = function() {
			//PUT
		};

		return init();
		
	}]);

})();