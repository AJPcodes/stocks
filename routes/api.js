"use strict";

const express = require('express');
const path = require('path');

const router = express.Router();
const api = require('../controllers/api.js');

//returns an array of stocks that potentially match the query string
//no result will return an empty string
router.get('/api/find/:query', api.query);

module.exports = router;