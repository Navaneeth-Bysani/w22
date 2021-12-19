const express = require('express');
const path = require('path');
const mysql = require('mysql');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const authRouter = require('./routes/authRoutes');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Navaneeth1@',
    database : 'wissenaire_22'
});


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

// //routes
// app.use('/api/v1/auth', authRouter);

//oAuth
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user,done){
    done(null, user);
});
  
passport.deserializeUser(async function(user, done) {
    await done(null, user);
});

passport.use(new GoogleStrategy({
    clinetId : '933857543160-t1095dkq9adhgh4idis72ma9b7u7l2ee.apps.googleusercontent.com',
    clientSecret : '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',
    callbackURL : 'http://localhost:3000/google/callback/',
    // userProfileURL : ,
}), function(accessToken, refreshToken, profile, done) {

});

app.get('/auth/google', passport.authenticate('google', { prompt : 'consent', scope : ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/profile', failureRedirect: '/'}),
  function(req, res) {
    req.session.save(); 
    res.redirect('/profile')   
  }
);
module.exports = app;