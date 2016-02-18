"use strict";

const express = require('express');

const router = express.Router();

const home = require('./home.js');
const api = require('./api.js');
const quote = require('./quote.js');
const purchase = require('./purchase.js');

router.use(home);
router.use(api);
router.use(quote);
router.use(purchase);

module.exports = router;