const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

exports.loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
};

exports.loginFailure = (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
};

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
