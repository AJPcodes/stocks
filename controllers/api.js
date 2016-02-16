"use strict";

var tickerLookup = require('../services/tickerLookup.js');

module.exports.query = (req, res) => {
  let lookupParam = req.params.query;
  tickerLookup(lookupParam, res);
};
