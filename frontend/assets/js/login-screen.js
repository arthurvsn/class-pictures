(function () {
	'use strict';
	angular.module('app.login').controller('LoginCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.doLogin = function () {
			window.location = '#/default';
		}
	}]);


	// controllers of main page
	angular.module('app.login').controller('navCtrl', function($scope) {
	  $scope.nav = {
	    navItems: ['HOME', 'CREATE DISCIPLINE', 'LIST DISCIPLINE', 'ABOUT CP'],
	    selectedIndex: 0,
	    navClick: function($index) {
	      $scope.nav.selectedIndex = $index;
	    }
	  };
	})

})();