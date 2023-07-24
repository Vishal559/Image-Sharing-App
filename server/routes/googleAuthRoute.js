const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  loginSuccess,
  loginFailure,
} = require("../controllers/googleAuthController");

const CLIENT_URL = "http://localhost:3000/";

router.route("/login/success").get(loginSuccess);
router.route("/login/failed").post(loginFailure);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
