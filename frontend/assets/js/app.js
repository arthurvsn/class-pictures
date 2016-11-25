(function () {
	'use strict';
    var app = angular.module('app', [
		'ngRoute',
		'app.login',
		'app.createClass',
		'app.list',
		'thatisuday.ng-image-gallery'
    ]);

    angular.module('app.login', []);
    angular.module('app.createClass', []);
    angular.module('app.list', []);

    app.controller('AppCtrl', ['$scope', '$location', '$rootScope', '$document', function($scope, $location, $rootScope, $document) {

		window.location = '#/login';

		$scope.hideMenu = function() {
			var path, ref, specificPages;
			path = $location.path();
			specificPages = ['/404', '/login'];
			return (ref = specificPages.indexOf(path) >= 0) != null ? ref : {
				1: -1
			};
		};

		return $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
			//return $document.scrollTo(0, 0);
		});

	}]);

	app.config(['$routeProvider', function($routeProvider) {
		var routes, setRoutes;

		routes = [
			'404', 'main', 'login', 'create', 'list', 'about', 'edit', 'discipline'
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