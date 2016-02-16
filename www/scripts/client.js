var stocksApp = angular.module('stocksApp', []);

stocksApp.controller('StocksAppCtrl', function ($http) {
  var that = this;
  this.stocks = [];

  $("#lookup").change(function(){
    var queryUrl = '/api/find/' + $("#lookup").val();

    $http({
      method: 'GET',
      url: queryUrl
    }).then(function successCallback(response) {
       that.stocks = response.data;
    }, function errorCallback(response) {
    });

  }); //end lookup

}); //end controller