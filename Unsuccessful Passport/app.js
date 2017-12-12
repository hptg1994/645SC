const express = require('express');
const app = express();
const configureApp = require("./router");
const bodyParser = require('body-parser');
const cookieParer = require('cookie-parser');
const flash = require("connect-flash");
const bcrypt = require("bcrypt-nodejs");
const connectFlash = require('connect-flash');
const expressSession = require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParer());
app.use(connectFlash());

var mongoose = require("mongoose");
app.use(expressSession({ 
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}));

configureApp(app);

app.listen(3000, () => {
	console.log("We've now got a server");
	console.log("Your routes will be running on http://localhost:3000");
});
