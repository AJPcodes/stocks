"use strict";

const express = require('express');
const path = require('path');

const router = express.Router();
const home = require('../controllers/home.js');

router.get('/', home);

module.exports = router;