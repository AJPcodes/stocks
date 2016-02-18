"use strict";

var quoteLookup = require('../services/quoteLookup.js');

module.exports.quote = (req, res) => {
  let lookupParam = req.params.quote;
  quoteLookup.renderPage(lookupParam, res);
};