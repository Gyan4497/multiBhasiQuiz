var express = require("express"),
cors = require('cors');

app = express(),
port = process.env.PORT || 8080,
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
quizModel = require('./api/models/mbQuizModel'); //loaded the model

app.use(cors());
//mongoose instance creation and connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mbQuizdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/mbQuizRoutes'); //importing route
routes(app); //register the route

app.listen(port);
console.log("multiBhasi Server started on Port:", port);
