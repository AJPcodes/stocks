"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sassMiddleware = require('node-sass-middleware');

const PORT = process.env.PORT || 3000;
//environmental variables (declared on heroku)
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || '27017';
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || 'mainFrame';
const MONGODB_URL_PREFIX = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`
  : ''
const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
// console.log('MONGODB_URL', MONGODB_URL);
const routes = require('./routes/');
const app = express();

mongoose.connect(MONGODB_URL);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.locals.title = "Stocks";

//app middleare for all post request (hits all routes)
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(routes);

//sass setup
app.use(sassMiddleware({
  src: path.join(__dirname, 'www'),
  dest: path.join(__dirname, 'www'),
  indentedSyntax: true, //used to do either sass or scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));


mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Node.js listening on port ${PORT}`);
  });

});