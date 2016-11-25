(function () {
	'use strict';
    angular.module('app').controller('DisciplineController', ['$scope', function($scope) {
		$scope.open = false;

    // $scope.selected.images = [
    //   {
    //     url: 'assets/img/class-pictures/class-1-picture-1.jpeg'
    //   }
    // ]

    $scope.toggleModal = function () {
      $scope.open = !$scope.open;
    }
    $scope.saveImage = function () {
      $scope.open = !$scope.open;
      var file = document.querySelector("#new-image").files[0];
      var reader  = new FileReader();
      var image = reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result)
        $scope.selected.images.push({url: reader.result});
        setTimeout(function () {
          var classes = localStorage.getItem('class');
        classes = classes? JSON.parse(classes) : [];
        classes.forEach(classs => {
          if (classs.id === $scope.selected.id) {
            classs.images = $scope.selected.images;
          }
        });
        localStorage.setItem('class', JSON.stringify(classes));
          $scope.$apply();
        });
      }
    }
	}]);
    
})();