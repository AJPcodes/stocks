var stocksApp = angular.module('stocksApp', []);

stocksApp.service('lookupService', function($http, $q){

  this.lookupStock = function(){
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

  this.lookupPortfolio = function(){
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

  var lookupValue = function(symbol){
    var queryUrl = '/api/quote/' + symbol;
    return $q(function(resolve, reject) {

      $http({
        method: 'GET',
        url: queryUrl
      }).then(function successCallback(response) {
          resolve(response.data.LastPrice);
      }, function errorCallback(error) {
          reject(new Error(error));;
      });

    });
  }; //end lookup Value

  this.lookupValues = function(portfolio){

    return $q(function(resolve, reject){

      portfolio.map(function(obj){
        var promise = lookupValue(obj.symbol);
        promise.then(function(data){
          obj.currentPrice = data;
          return obj;
        })
      }) //end map
      resolve(portfolio);
    })

  }; //end lookup Values

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
        that.getCurrentValues();
      })
  }.bind(this);

  this.getPortfolio();

  this.getCurrentValues = function(){
    console.log('getting current prices');
    var promise = lookupService.lookupValues(this.portfolio);
      promise.then(function(data){
        that.portfolio = data;
      })
  }.bind(this);



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


