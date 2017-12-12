const express = require('express');
const app = express();
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyParser = require('body-parser');
const cookieParer = require('cookie-parser');
const connectFlash = require('connect-flash');

const configRoute = require('./routes');

const handlebarInstance = exphbs.create({
	defaultLayout: 'main'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParer());
app.use(connectFlash());

const rewriteUnsupportedBrowserMethods= (req, res, next) => {
	if (req.body && req.body._method) {
		req.method = req.body._method;
		delete req.body._method;
	}
	next();
}

app.use(rewriteUnsupportedBrowserMethods);
app.engine('handlebars', handlebarInstance.engine);
app.set('view engine', 'handlebars');

app.use(expressSession({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false
	}
}));

configRoute(app);

app.listen(3000, () => {
	console.log("We've now got a server");
	console.log("Your routes will be running on http://localhost:3000");
});
