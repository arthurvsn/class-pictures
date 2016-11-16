(function () {
	'use strict';
	angular.module('app.login').controller('LoginCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.doLogin = function () {
			window.location = '#/default';
		}
	}]);
    
})();