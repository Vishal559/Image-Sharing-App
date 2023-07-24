const cors = require("cors");
const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("./googleAuth.js");

//regular middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(
  cookieSession({
    name: "session",
    keys: ["secret"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//import All routes
const user = require("./routes/user");
const googleAuth = require("./routes/googleAuthRoute");

//router middleware
app.use("/api/v1", user);
app.use("/auth", googleAuth);

module.exports = app;
