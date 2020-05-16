(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
  $scope.items= "";
  $scope.message = "";


  $scope.displayMessage = function () {
    var totalItems = calculateItems($scope.items);

    $scope.message = getMessage(totalItems);

  };


  function calculateItems(items) {
    var totalItems = 0;
    if(items!="")
    {
      var itemnames= items.split(',');
      var i;
      for(i=0;i<itemnames.length;i=i+1)
      {
        if(itemnames[i]!="")
        totalItems=totalItems+1;
      }

    }

    return totalItems;
  }
  function getMessage(totalItems) {
    var Message="";
    if(totalItems==0)
    Message="Please enter data first";
    else if(totalItems<=3)
    Message="Enjoy";
    else {
      Message="Too Much";
    }
    return Message;
  }


}


})();
