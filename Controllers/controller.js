// Crear el modulo principal de mi aplicacion
// El modulo es el contenedor de toda la aplicacion
// El modulo se asocia al HTML mediante la directiva ng-app
// El modulo recibe un array con las dependencias de la aplicacion (otros modulos)
// Tambien se usa para declarar modulos secundarios para otros archivos, luego se podrán usar en nuestra plantilla
var app = angular.module("MyFirstApp", []);

// Crear el controlador, encargado de la logica de una parte de la aplicacion
// El controlador se asocia a una parte del HTML mediante la directiva ng-controller
// El controlador recibe un objeto $scope, que es el encargado de la comunicacion entre la vista (HTML) y el controlador (JavaScript)
app.controller("FirstController", function ($scope) {
  $scope.nombre = "Willman";
});

// Otra forma de hacerlo
/* angular.module("MyFirstApp").controller("FirstController", function ($scope) {
  $scope.nombre = "Willman";
}); */

// Incluso podriamos anexar mas controladores al mismo modulo
/* angular
  .module("MyFirstApp")
  .controller("FirstController", function ($scope) {
    $scope.nombre = "Willman";
  })
  .controller("SecondController", function ($scope) {
    $scope.nombre = "Alfredo";
  });
 */