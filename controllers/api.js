"use strict";

var tickerLookup = require('../services/tickerLookup.js');
var portfolioLookup = require('../services/portfolio.js');
var quoteLookup = require('../services/quoteLookup.js');

module.exports.query = (req, res) => {
  let lookupParam = req.params.query;
  tickerLookup(lookupParam, res);
};

module.exports.portfolio = (req, res) => {
  let lookupParam = req.params.query;
  portfolioLookup(res);
};

module.exports.quote = (req, res) => {
  let lookupParam = req.params.quote;
  quoteLookup.sendData(lookupParam, res);
};