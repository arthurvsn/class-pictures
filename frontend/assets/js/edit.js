(function () {
	'use strict';
	angular.module('app.list').controller('EditCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.saveSelected = function () {
      var classes = localStorage.getItem('class');
      classes = classes? JSON.parse(classes) : [];
      classes.forEach(classs => {
        if (classs.id === $scope.selected.id) {
          classs.name = $scope.selected.name;
        }
      });
      localStorage.setItem('class', JSON.stringify(classes));
      $scope.$root.divIndex = 0;
    }
  }]);

})();