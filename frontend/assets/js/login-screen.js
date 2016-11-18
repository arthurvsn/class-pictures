(function () {
	'use strict';
	angular.module('app.login').controller('LoginCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

		$scope.doLogin = function () {
			var datajson = {
				 usuario:$scope.loginData.user,
				 senha: $scope.loginData.senha
				} 
			$http.post('../backend/Classpictures/public/iindex.php/url-da-requisicao', datajson)
				.success(function(data, status, headers, config) {
  				// sucesso! 
  				// data agora contém o que foi retornado pelo servidor
  				})
				.error(function(data, status, headers, config) {
		  				// erro!
		  				// você pode verificar o parâmetro "status" para ver o código HTTP do erro
				});
			// window.location = '#/default';
		}


		$scope.loginData = {};
	}]);


	// // controllers of main page
	// angular.module('app.login').controller('navCtrl', function($scope) {
	//   $scope.nav = {
	//     navItems: ['CREATE DISCIPLINE', 'LIST DISCIPLINE', 'ABOUT CP'],
	//     selectedIndex: 0,
	//     navClick: function($index) {
	//       $scope.nav.selectedIndex = $index;
	//     }
	//   };
	// });

})();