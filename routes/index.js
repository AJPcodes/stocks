"use strict";

const express = require('express');

const router = express.Router();

const home = require('./home.js');
const api = require('./api.js');
const quote = require('./quote.js');

router.use(home);
router.use(api);
router.use(quote);

module.exports = router;