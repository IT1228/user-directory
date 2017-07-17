const express = require("express");
const mustache = require('mustache-express');
const dataJS = require('./data.js');
const bodyParser = require('body-parser');

const application =  express();

application.engine('mustache', mustache());

application.set('views', './views');
application.set('view engine', 'mustache');

application.use(bodyParser.urlencoded());
application.use("/public", express.static("./public"));

application.get('/', function(request, response) {
    response.render('index', dataJS)
});

application.listen(3000);