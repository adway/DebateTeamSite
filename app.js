// APP CONFIG
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  nodemailer = require('nodemailer'),
  mongoose = require('mongoose'),
  expressSanitizer = require('express-sanitizer'),
  methodOverride = require('method-override'),
  flash = require('connect-flash'),
  passport = require('passport'),
  LocalStrategy = require('passport-local');

// ROUTE INCLUDES
const indexRoutes = require('./routes/index');

// MONGOOSE CONFIG
mongoose.connect('mongodb://localhost/debate');

// BODY PARSER CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TEMPLATING ENGINE
app.set('view engine', 'ejs');

// SERVE PUBLIC DIRECTORY
app.use(express.static(__dirname + '/public'));

// Use Express Sanitizer
app.use(expressSanitizer());
// Init Method Override
app.use(methodOverride('_method'));
// Use Flash Messaging
app.use(flash());

// ROUTES
app.use('/', indexRoutes);

// SERVER CONFIG
app.listen(3000, function() {
  console.log('Server has started');
});
