const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "277703437399-lmdu9sjmajamfnl295t5ghpfgiqfb479.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
