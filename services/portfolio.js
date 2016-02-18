"use strict";

const Stock = require('../models/Stock');
const mongoose = require('mongoose');

module.exports=function(res){

  Stock.find()
    .then((data) => {
      console.log(data)
      res.send(data);
  })
}

