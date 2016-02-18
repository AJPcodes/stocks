"use strict";

const express = require('express');

const router = express.Router();
const purchase = require('../controllers/purchase.js');

router.post('/purchase', purchase);

module.exports = router;