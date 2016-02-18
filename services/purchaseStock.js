"use strict";

const Stock = require('../models/Stock');
const request = require('request');
const mongoose = require('mongoose');

module.exports = function(symbol, numShares, res) {

  let url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + symbol;
  request.get(url, (err, response) => {
    if (err) throw err;
      const data = JSON.parse(response.body);
      const obj = new Stock({
        symbol: data.Symbol,
        name: data.Name,
        quantity: numShares,
        cost: (data.LastPrice * numShares)
      });

      obj.save((err, result) => {
        if (err) throw err;
        res.render('purchase', obj);
      });
  });
};