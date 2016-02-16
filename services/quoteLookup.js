"use strict";

const request = require('request');

module.exports = function(lookupParam, res) {

  let url = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + lookupParam;

  request.get(url, (err, response) => {
        if (err) throw err;
        console.log(response.body);
        res.render('quote', {
          quoteData: JSON.parse(response.body),
          testVar: 'testy test'
        });
  })
};
