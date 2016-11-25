(function () {
	'use strict';
	angular.module('app.list').controller('ListCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {


	


		var init;
		$scope.disciplinesList = localStorage.getItem('class');
        $scope.disciplinesList = $scope.disciplinesList? JSON.parse($scope.disciplinesList) : []
	    $scope.$root.divIndex = 0;

        $scope.$watch('divIndex', function () {
            init();
        })

		$scope.init = init = function() {
            $scope.disciplinesList = localStorage.getItem('class');
            $scope.disciplinesList = $scope.disciplinesList? JSON.parse($scope.disciplinesList) : []
			// $scope.disciplinesList = [{
			// 	name: 'nome 1',
			// 	clas: 'class',
			// 	comments: 'jasndiansd'
			// }];
			//$scope.$root.divIndex = 0;
			//$scope.loadClass();
		};

		$scope.loadClass = function() {
			
			$http.get('../backend/ClassPictures/public/index.php/class')
            .success(function (data, status, headers, config) {
                //$scope.Details = data;
                $scope.disciplinesList = data;
            })
            .error(function (data, status, header, config) {
                // $scope.ResponseDetails = "Data: " + init +
                //     "<br />status: " + status +
                //     "<br />headers: " + jsonFilter(header) +
                //     "<br />config: " + jsonFilter(config);
            });
		};

		$scope.editClass = function(discipline) {
			$scope.$root.selected = angular.copy(discipline);
			$scope.$root.divIndex = 1;
		};

		$scope.deleteClass = function(discipline) {
            var classes = localStorage.getItem('class');
            classes = classes? JSON.parse(classes) : [];
            classes.forEach((classs, index) => {
                if (classs.id === discipline.id) {
                    classes.splice(index, 1);
                }
            });
            localStorage.setItem('class', JSON.stringify(classes));
            $scope.$root.divIndex = 0;
		};

		$scope.cancelEdit = function() {
			$scope.selected = {};
			$scope.$root.divIndex = 0;
		};

		$scope.saveSelected = function() {

			$http.put('../backend/ClassPictures/public/index.php/class/'+$scope.selected.id, $scope.selected)
            .success(function (data, status, headers) {
                $scope.ServerResponse = $scope.selected;
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse =  htmlDecode("Data: " + $scope.selected +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
            });
		};

 		/*$scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                fName: $scope.firstName,
                lName: $scope.lastName
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/ServerRequest/PostDataResponse', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };*/

		return init();
		
	}]);

})();