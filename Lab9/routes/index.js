const express = require('express');
const router = express.Router();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const userData = require("../usersdata");
const cookieParer = require('cookie-parser');
const connectFlash = require('connect-flash');

passport.use(new Strategy(
    (username, password, done) => {
        console.log(`username: ${username}`);

        let res = userData.getUserPassword(username, password);
        if (res.result) {
            return done(null, res.message);
        }
        return done(null, false, {
            message: res.message
        });
    }));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    let auth = user.split(' ');
    if (auth.length != 2)
        return done(null, false, {
            message: "Cookie is not valid"
        });

    let username = auth[0];
    let password = auth[1];

    let res = userData.getUserPassword(username, password);
    if (res.result)
        return done(null, res.message);

    return done(null, false, {
        message: res.message
    });
});

let configRoute = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cookieParer());
    app.use(connectFlash());

    app.get('/', (req, res) => {
        if (req.isAuthenticated()) {
            res.redirect('/private');
        } else {
            res.redirect('/login');
        }
    });

    app.post('/login', passport.authenticate('local', {
        successRedirect: '/private',
        failureRedirect: '/',
        failureFlash: true,
        successFlash: "Welcome"
    }));

    app.get('/private', (req, res) => {
        if (req.isAuthenticated()) {
            let userInfo = userData.getUserName(req.user.split(' ')[0]);
            res.render('private', {
                username: req.user.split(' ')[0],
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                profession: userInfo.profession,
                bio: userInfo.bio
            });
        } else {
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
}

module.exports = configRoute;