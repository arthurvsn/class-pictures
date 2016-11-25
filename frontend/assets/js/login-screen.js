(function () {
	'use strict';
	angular.module('app.login').controller('LoginCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.doLogin = function () {
			if ($scope.name === "teste" && $scope.password === "123") {
				window.location = '#/main';
				$scope.$root.usuario = $scope.name;
			} else {
				alert("Usuário e/ou senha inválidos! Verifique os dados inseridos.")
			}
		}
	}]);


	// controllers of main page
	angular.module('app.login').controller('navCtrl', function($scope) {
	  $scope.nav = {
	    navItems: [
				{
					name: 'CREATE DISCIPLINE',
					link:'create'
				},
				{
					name: 'LIST DISCIPLINE',
					link:'list'
				},
				{
					name: 'ABOUT CP',
					link:'about'
				}
			],
	    selectedIndex: 0,
	    navClick: function($index) {
	      $scope.nav.selectedIndex = $index;
	    }
	  };
	});

	angular.module('app.login').controller('navbar', function($scope) {
	  //$scope.usuario = 'Fulano da Silva';
	});

})();