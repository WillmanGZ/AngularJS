angular
  .module("ToDoList", [])
  .service("ToDoService", function () {
    this.key = "angular-todolist";

    try {
      this.activities = JSON.parse(localStorage.getItem(this.key)) || [];
    } catch (e) {
      this.activities = [];
    }

    this.add = function (newActv) {
      this.activities.push(newActv);
      this.updateLocalStorage();
    };

    this.getAll = function () {
      return this.activities;
    };

    this.updateLocalStorage = function () {
      localStorage.setItem(this.key, JSON.stringify(this.activities));
    };

    this.clean = function () {
      this.activities = [];
      this.updateLocalStorage();
    };

    this.removeItem = function (item) {
      this.activities = this.activities.filter(function (activity) {
        return activity !== item;
      });
      this.updateLocalStorage();
      return this.getAll();
    };
  })
  .controller("ToDoController", function ($scope, ToDoService) {
    $scope.newActv = {};
    $scope.todo = ToDoService.getAll();

    $scope.addActv = function () {
      ToDoService.add($scope.newActv);
      $scope.newActv = {};
    };
    $scope.clean = function () {
      ToDoService.clean();
      $scope.newActv = {};
    };
    $scope.removeAct = function (item) {
      $scope.todo = ToDoService.removeItem(item);
    };
  });
