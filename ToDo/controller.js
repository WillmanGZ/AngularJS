angular.module("ToDoList", []).controller("ToDoController", function ($scope) {
  $scope.todo = JSON.parse(localStorage.getItem("angular-todolist")) ?? [];
  $scope.newActv = {};

  // Los watchers son una manera de estár siempre vigilando algo, en este caso se le pasan 2 funciones como parametros
  // La primera función es para retornar el objeto que estaremos vigilando
  // La segunda función es la que obtendrá el valor nuevo y el valor viejo de ese objeto
  /*   $scope.$watch(
    function () {
      return $scope.newActv;
    },
    function (newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
    }
  ); */

  // Para las colecciones angular tiene un objeto similar llamado $watchCollection
  // Primero se le pasa el nombre de la colección en string
  // En este caso, cada vez que actualicemos la colección todo, disparará la segunda función (Similar al effect()), la cual guardará la lista en el LS
  $scope.$watchCollection("todo", function (newValue, oldValue) {
    localStorage.setItem("angular-todolist", JSON.stringify($scope.todo));
  });

  $scope.addActv = function () {
    $scope.todo.push($scope.newActv);
    $scope.newActv = {};
  };
  $scope.clean = function () {
    $scope.todo = [];
    $scope.newActv = {};
  };
});
