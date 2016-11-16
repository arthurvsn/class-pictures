(function () {
	'use strict';
    var app = angular.module('App', [
		'ngRoute',
		'app.login'
    ]);

    angular.module('app.login', []);

    app.controller('AppCtrl', ['$scope', '$location', '$rootScope', '$document', function($scope, $location, $rootScope, $document) {

		window.location = '#/login';

		return $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
			return $document.scrollTo(0, 0);
		});

	}]);

	app.config(['$routeProvider', function($routeProvider) {
		var routes, setRoutes;

		routes = [
			'404',
			'default',
			'login'
		];

		setRoutes = function(route) {
			var config, url;
			url = '/' + route;
			config = {
					templateUrl: 'app/' + route + '.html'
			};
			$routeProvider.when(url, config);
			return $routeProvider;
		};

		routes.forEach(function(route) {
			return setRoutes(route);
		});

		$routeProvider
			.when('/', {redirectTo: '/login'})
			.otherwise({ redirectTo: '/404'});
	}]);

    
})();