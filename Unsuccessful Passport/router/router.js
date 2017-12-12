const express = require("express");
const router = express.Router();

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt-nodejs");
var User = require("../data/user.js");


passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function (req, username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, req.flash('info', 'User not found.'))
      }
      if (!isValidPassword(user, password)) {
        return done(null, false, req.flash('info', 'Invalid password'))
      }
      return done(null, user)
    })
  }
));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});
  
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
});

passport.use('signup', new LocalStrategy({
  passReqToCallback: true
}, function (req, username, password, done) {
  var findOrCreateUser = function () {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, req.flash('info', 'User already exists'));
      } else {
        var newUser = new User();
        newUser.username = username;
        newUser.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
        newUser.email = req.params.email;
        newUser.firstname = req.params.firstname;
        newUser.lastname = req.params.lastname;
        newUser.save(function (err, user) {
          if (err) {
            throw err;
          }
          return done(null, user);
        });
      }
    });
  };
  process.nextTick(findOrCreateUser)
}));


router.get('/', function (req, res, next) {
  res.render('index', { message: req.flash('info') });
})
router.post('/signin', passport.authenticate('login', {
  successRedirect: console.log("Successful"),
  failureRedirect: console.log("Fail"),
  failureFlash: true
}));
router.get('/signup', function (req, res, next) {
  res.render('signup', { message: req.flash('info') });
});
router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/home',
  failureRedirect: '/signup',
  failureFlash: true
}));


module.exports = router;