"use strict";

const request = require('request');

module.exports.renderPage = function(lookupParam, res) {

  let url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + lookupParam;

  request.get(url, (err, response) => {
    if (err) throw err;
    res.render('quote', {
      quoteData: JSON.parse(response.body),
    });
  })
};

module.exports.sendData = function(lookupParam, res) {

  let url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + lookupParam;

  request.get(url, (err, response) => {
    if (err) throw err;
    res.send(JSON.parse(response.body));
  })
};
