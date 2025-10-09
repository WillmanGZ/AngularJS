angular
  .module("MyFirstApp", [])
  .controller("FirstController", function ($scope, $http) {
    $scope.posts = [];
    $scope.newPost = {};

    // El httpclient usa promises para gestionar sus estados y su información
    // Uso del GET
    $http.get("https://jsonplaceholder.typicode.com/posts").then(
      function (data) {
        console.log(data);
        $scope.posts = data.data;
      },
      function (error) {
        console.log(error);
      }
    );

    // Uso del POST
    $scope.addPost = function () {
      // De la misma manera que con el fetch, primero va la URL y luego los parametros de la peticion (method, body, etc)
      $http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: $scope.newPost.title,
          body: $scope.newPost.body,
          userId: 1,
        })
        .then(
          // Podemos recibir más informacion del llamado a la api
          function (data, status, headers, config) {
            $scope.posts.push($scope.newPost);
            $scope.newPost = {};
          },
          function (error, status, headers, config) {
            console.log(error);
          }
        );
    };
  });
