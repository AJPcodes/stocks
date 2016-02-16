"use strict";

const request = require('request');

module.exports = function(lookupParam, res) {

  let url = 'http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=' + lookupParam;

  request.get(url, (err, response) => {
        if (err) throw err;
        res.send(response.body);
  })
};