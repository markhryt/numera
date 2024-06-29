const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: process.env.LIST_PORT, // Ensure this contains the client URL
  credentials: true,
}));

const signIn = require("./routes/signIn");
const register = require("./routes/register/register");
const logout = require("./routes/account/logout/logout");
const convert = require("./routes/convert/convert")
const accountInfo = require("./routes/account/accountinfo")
app.use("/register", register);
app.use("/signin", signIn);
app.use("/logout", logout);
app.use("/convert", convert);
app.use("/account/info", accountInfo);

const port = process.env.PORT || 3000; // Use an environment variable for the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
