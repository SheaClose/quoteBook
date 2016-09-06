angular.module('myApp')
  .controller('mainCtrl', function ($scope, myService){
    $scope.allQuotes = myService.getData();
    $scope.addData = myService.addData;
    $scope.removeData = myService.removeData;

  });
