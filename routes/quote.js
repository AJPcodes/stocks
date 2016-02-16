"use strict";

const express = require('express');
const router = express.Router();
const quoteCtrl = require('../controllers/quote.js');

//returns an array of stocks that potentially match the query string
//no result will return an empty string
router.get('/quote/:quote', quoteCtrl.quote);

module.exports = router;