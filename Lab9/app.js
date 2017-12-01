const express = require('express');
const app = express();
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyParser = require('body-parser');
const configRoute = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const rewriteUnsupportedBrowserMethods= (req, res, next) => {
	if (req.body && req.body._method) {
		req.method = req.body._method;
		delete req.body._method;
	}
	next();
}
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', exphbs({defaultLayout:'main'}));
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
