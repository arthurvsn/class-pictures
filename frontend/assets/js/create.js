(function () {
	'use strict';
	angular.module('app.createClass').controller('CreateClassCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {


		$scope.save = function() {
			//POST
			// use $.param jQuery function to serialize data from JSON 
            var data = {
            	name: $scope.name
                //discipline: $scope.discipline,
                //class: $scope.class,
                //observation: $scope.obs
            };
        	console.log("save");

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