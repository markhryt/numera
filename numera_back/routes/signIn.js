const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const customers = require("../db/models/usercredentials");

// Configure Passport Local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // Use email instead of the default 'username'
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        // Find user by email
        const user = await customers.findOne({ where: { email: email } });
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        // Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user); // User authenticated
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await customers.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Authentication Route
router.post("/", passport.authenticate("local"), (req, res) => {
  res.send(true);
});

function check(req, res) {
  try {
    if (req.isAuthenticated()) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.send("an error occurred");
  }
}

router.get("/check", check);

module.exports = router;
