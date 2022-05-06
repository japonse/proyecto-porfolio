import express from 'express';
import passport from 'passport';
const LocalStrategy = require("passport-local").Strategy;

//which data of the user object should be stored in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//the key of the user object
passport.deserializeUser((id, done) => {
  const user =  {id : 1, username : 'admin'};
  done(null, user); 
});

passport.use(
  new LocalStrategy(async function (username, password, done) {
    console.log("Entered local strategy "+username+" "+password);

    const user: {id: number, username: string, password: string} = {id : 1, username : 'admin', password : password};

    if(password == process.env.ADMIN_PASSWORD && username == 'admin'){
      return done(null, user);
    }else{
      return done(null, false);
    }
  })
);
