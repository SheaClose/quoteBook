angular.module('myApp')
  .controller('mainCtrl', function ($scope, myService){
    $scope.allQuotes = myService.getData();
    $scope.removeData = myService.removeData;
    $scope.addData = function(){
      var newQuote = {
        author: $scope.newQuoteauthor,
        text: $scope.newQuotetext
      }
        if(myService.addData(newQuote)){
          $scope.newQuoteText = '';
          $scope.newQuoteAuthor= '';
        }
    }
  });
