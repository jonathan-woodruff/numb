const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { dbGetUser } = require(".../models/dbFuncs")

/*
passport.use(new LocalStrategy(
  function (email, password, done) {
    const user = 
    dbGetUser(email, async (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      const matchedPassword = await bcrypt.compare(password, user.password);
      if (!matchedPassword) return done(null, false);
      return done(null, user);
    })
  }
))*/

// Serialize a user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize a user
passport.deserializeUser((id, done) => {
  helper.findById(id, function (err, user) {
    if (err) return done(err);
    done(null, user);
  })
})
