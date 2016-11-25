(function () {
	'use strict';
	angular.module('app.createClass').controller('CreateClassCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {


		$scope.save = function() {
            $scope.$root.divIndex = 0;
			//POST
			// use $.param jQuery function to serialize data from JSON 
            var data = {
            	name: $scope.name,
                pictures: [],
                id: new Date().getTime()
                //discipline: $scope.discipline,
                //class: $scope.class,
                //observation: $scope.obs
            };
            var classes = localStorage.getItem('class')
            classes = classes? JSON.parse(classes) : [];
            classes.push(data)
            localStorage.setItem('class', JSON.stringify(classes))
            $scope.$root.divIndex = 0;
            window.location = "#/list";

            $http.post('../backend/ClassPictures/public/index.php/class', $scope.currentDiscipline)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });

		};

		$scope.cancel = function() {
			window.location = '#/main';
		};

		//return init();
		
	}]);

})();