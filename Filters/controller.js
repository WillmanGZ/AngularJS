// Con el .filter podemos crear filtros (pipes) personalizados
// Recibirá como parametros 1. nombre del filtro, 2. funcción para el filtro
angular
  .module("mainModule", [])
  .filter("removeHtml", function () {
    return function (texto) {
      // Quitar las etiquetas de HTML
      return String(texto).replace(/<[^>]+>/gm, "");
    };
  })
  .controller("FiltersController", function ($scope) {
    $scope.miHtml = "<p>Hola Mundo</p>";
    $scope.costo = 2;
  });
