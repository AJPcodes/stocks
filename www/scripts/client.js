var stocksApp = angular.module('stocksApp', []);

stocksApp.service('lookupService', function($http, $q){

  this.lookupStock = function(stocks){
    var queryUrl = '/api/find/' + $("#lookup").val();
    return $q(function(resolve, reject) {

      $http({
        method: 'GET',
        url: queryUrl
      }).then(function successCallback(response) {
          resolve(response.data);
      }, function errorCallback(error) {
          reject(new Error(error));;
      });

    });
  }; //end lookup Stock

  this.lookupPortfolio = function(stocks){
    var queryUrl = '/api/portfolio';
    return $q(function(resolve, reject) {

      $http({
        method: 'GET',
        url: queryUrl
      }).then(function successCallback(response) {
          resolve(response.data);
      }, function errorCallback(error) {
          reject(new Error(error));;
      });

    });
  }; //end lookup Portfolio

}); //end service

stocksApp.controller('StocksAppCtrl', function (lookupService) {
  var that = this;

  this.stocks = [];
  this.portfolio = null;

  this.toggle = function(element){
    $(element).toggle('display');
  }

  this.getPortfolio = function(){
    var promise = lookupService.lookupPortfolio();
      promise.then(function(data){
        that.portfolio = data;
      })
  }.bind(this);

  this.getPortfolio();

  $("#lookup").keypress(function(e){
    var code = e.keyCode || e.which;

    if(code === 13) {
      var promise = lookupService.lookupStock();
      promise.then(function(data){
        that.stocks = data;
      })
    }
  })

}); //end controller


