const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-local');
const db = require("../data");

let configPassport = (passport) => {
	passport.use(new Strategy(
				(username, password, done) => {
					console.log(`username: ${username}`);

				let res = db.verifyUserPass(username, password);
				if (res.result) {
					console.log("auth true");
					return done(null, res.message);
				}
				return done(null, false, {message: res.message});
				}));

	passport.serializeUser((user, done) => {
		console.log(`serializing user: ${user}`);
		done(null, user);
	});

	passport.deserializeUser((user, done) => {
		console.log(`deserializing user: ${user}`);
		let auth = user.split(' ');
		if (auth.length != 2)
			return done(null, false, {message: "Cookie is not valid"});

		let username = auth[0];
		let password = auth[1];

		let res = db.verifyUserPass(username, password);
		if (res.result)
			return done(null, res.message);

		return done(null, false, {message: res.message});
	});
}

configPassport(passport);

let configRoute = (app) => {
	app.use(passport.initialize());
	app.use(passport.session());

	app.post('/login', passport.authenticate('local', {
		successRedirect: '/private',
		failureRedirect: '/',
		failureFlash: true,
		successFlash: "Welcome"
	}));

	app.get('/private', (req, res) => {
		if (req.isAuthenticated()) {
			console.log(req.user);
			let username = req.user.split(' ')[0];
			let userInfo = db.getUserByName(username);
			res.render('private', {
				username: username,
				firstName: userInfo.firstName,
				lastName: userInfo.lastName,
				profession: userInfo.profession,
				bio: userInfo.bio
			});
			console.log(`{username} is authenticated`);
		} else {
			console.log("unanthenticated, redirect to login page");
			res.redirect('/login');
		}
	});

	app.get('/login', (req, res) => {
		if (!req.isAuthenticated()) {
			if (req.session.flash && req.session.flash.error) {
				console.log("error: " + req.session.flash.error.slice(-1)[0]);
				res.render('login.handlebars', {
					error: true,
					message: req.session.flash.error.slice(-1)[0]
				});
				return
			}
			res.render('login', {
				error: false
			});
		} else {
			res.redirect('/private');
		}
	});

	app.get('/', (req, res) => {
		if (req.isAuthenticated()) {
			res.redirect('/private');
		} else {
			res.redirect('/login');
		}
	});
}

module.exports= configRoute;
