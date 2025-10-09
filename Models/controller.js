angular
  .module("MyFirstApp", [])
  .controller("FirstController", function ($scope) {
    $scope.nombre = "Willman";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
      {
        comentario: "Buen Tutorial",
        username: "CodigoFacilito",
      },
      {
        comentario: "Malisimo el tutorial",
        username: "otro_usuario",
      },
    ];

    $scope.agregarComentario = function () {
      $scope.comentarios.push($scope.nuevoComentario);
      $scope.nuevoComentario = {};
    };
  });
