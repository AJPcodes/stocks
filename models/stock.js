"use strict";

let mongoose = require('mongoose');

const Stock = mongoose.model('stocks', mongoose.Schema({
    symbol: String,
    name: String,
    quantity: Number,
    cost: Number
}));

module.exports = Stock;