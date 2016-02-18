"use strict";

const purchase = require('../services/purchaseStock.js');


module.exports = (req, res) => {
  console.log(req.body);

  if(req.body.symbol && req.body.numShares) {
    purchase(req.body.symbol, req.body.numShares, res);
  }

};