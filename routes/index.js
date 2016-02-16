"use strict";

const express = require('express');

const router = express.Router();

const home = require('./home.js');
const api = require('./api.js');

router.use(home);
router.use(api);

module.exports = router;