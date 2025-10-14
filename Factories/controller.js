angular
  .module("ToDoList", [])
  .factory("ToDoService", function () {
    let toDoService = {};
    toDoService.key = "angular-todolist";

    try {
      toDoService.activities =
        JSON.parse(localStorage.getItem(toDoService.key)) || [];
    } catch (e) {
      toDoService.activities = [];
    }

    toDoService.add = function (newActv) {
      toDoService.activities.push(newActv);
      toDoService.updateLocalStorage();
    };

    toDoService.getAll = function () {
      return toDoService.activities;
    };

    toDoService.updateLocalStorage = function () {
      localStorage.setItem(
        toDoService.key,
        JSON.stringify(toDoService.activities)
      );
    };

    toDoService.clean = function () {
      toDoService.activities = [];
      toDoService.updateLocalStorage();
    };

    toDoService.removeItem = function (item) {
      toDoService.activities = this.activities.filter(function (activity) {
        return activity !== item;
      });
      toDoService.updateLocalStorage();
      return toDoService.getAll();
    };

    return toDoService;
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
