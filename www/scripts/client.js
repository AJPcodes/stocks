var stocksApp = angular.module('stocksApp', []);

stocksApp.service('lookupService', function($http, $q){

  this.lookupStock = function(stocks){
    var queryUrl = '/api/find/' + $("#lookup").val();
    return $q function() {

      $http({
        method: 'GET',
        url: queryUrl
      }).then(function successCallback(response) {
          resolve(response.data);
      }, function errorCallback(error) {
          reject(new Error(error));;
      });

    }
  }; //end lookup
}); //end service

stocksApp.controller('StocksAppCtrl', function (lookupService) {

  var that = this;
  this.stocks = [];

  $("#lookup").keypress(function(e){
    var code = e.keyCode || e.which;

    if(code === 13) {
      ver promise = lookupService.lookupStock(that.stocks);
      promise.then(function(data){
        that.stocks = data;
      })
    }
  })

}); //end controller


