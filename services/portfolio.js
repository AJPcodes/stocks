"use strict";

const Stock = require('../models/Stock');
const mongoose = require('mongoose');
const _ = require('lodash');

module.exports=function(res){

  Stock.find()
    .then((allPurchases) => {

      //get all the symbols owned
      let stocksByTicker = _.unionBy(allPurchases, 'symbol').map(function(obj){
        return _.pick(obj, ['symbol', 'name']);
      });

      //add all past purchases together
      stocksByTicker.map(function(obj){
        obj.quantity = 0;
        obj.cost = 0;

        for (let i=0; i< allPurchases.length; i++) {
          let purchase = allPurchases[i];

          if (purchase.symbol === obj.symbol) {
            obj.quantity += purchase.quantity;
            obj.cost += purchase.cost;
          }

        }

        obj.cost = obj.cost.toFixed(2);
        return obj;

      });

      res.send(stocksByTicker);
  })
}

