// NPM packages - dependencies

// express = "fast, unopinionated, minimalist web framework for node."
var express = require('express');
var app = express();
// handlebars for easier redering of html pages
var exphbs  = require('express-handlebars');
//HTTP request logger middleware for node.js - logs time requests take

// =======================================
var logger = require("morgan");
// object modeling tool for MongoDB (like sequelize is for sql servers)
var mongoose = require("mongoose");
// provides utilities for working with file and directory paths
var path = require("path");

// =======================================
// promise based HTTP client for the browser and node.js
var axios = require("axios");
// Fast, flexible & lean implementation of core jQuery designed for Node.
var cheerio = require("cheerio");
// =======================================

// handlebars requirements to render pages
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// makes all files within models folder accessible
var db = require("./models");

// first part of this allows Heroku / mLabs to assign a port
var PORT = process.env.PORT || 3000;

// Use morgan logger to show info on logs
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To serve static files such as images, CSS files, and JavaScript files, use the express.static - a built-in middleware function in Express.
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/scraping", { useNewUrlParser: true });


// route to render page through handlebars
app.get('/', function (req, res) {
    res.render('home');
});




// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT);
});
