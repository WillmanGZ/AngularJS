angular
  .module("MyFirstApp", [])
  .controller("FirstController", function ($scope, $http) {
    $scope.posts = [];
    $scope.loading = true;

    $http.get("https://jsonplaceholder.typicode.com/posts").then(
      function (data) {
        console.log(data);
        $scope.posts = data.data;
        $scope.loading = false;
      },
      function (error) {
        console.log(error);
        $scope.loading = false;
      }
    );
  });
