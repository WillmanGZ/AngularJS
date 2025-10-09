
// La injeccion de dependencias se hace atravez de un array
// El nombre del servicio va entre comillas y la funcion va al final
// El orden de los parametros de la funcion debe coincidir con el orden de los nombres de los servicios en el array
// En este caso la funcion está dentro de corchetes, por lo que no hay problema de minificación
// Si la funcion estuviera fuera de los corchetes, al minificar el codigo se perderian los nombres de los parametros y Angular no sabria que inyectar
angular.module("MyFirstApp", []).controller("FirstController", [
  "$scope",
  function (m) {
    m.nombre = "Willman";
    m.nuevoComentario = {};
    m.comentarios = [
      {
        comentario: "Buen Tutorial",
        username: "CodigoFacilito",
      },
      {
        comentario: "Malisimo el tutorial",
        username: "otro_usuario",
      },
    ];

    m.agregarComentario = function () {
      m.comentarios.push(m.nuevoComentario);
      m.nuevoComentario = {};
    };
  },
]);
