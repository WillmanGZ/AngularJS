(function () {
  "use strict";

  angular
    .module("MyFirstApp", [])
    .run(function ($rootScope) {
      $rootScope.nombre = "Willman";
    })
    .controller("MyFirstController", function ($scope) {
      $scope.nombre = "Cristiano";
      setTimeout(() => {
        $scope.$apply(function () {
          $scope.nombre = "Ñame";
        });
      }, 1000);
    })
    .controller("ChildController", function ($scope) {});
})();
