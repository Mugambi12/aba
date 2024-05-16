// passportConfig.js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const { loadData, saveData } = require("../dataHandler/dataHandler");

passport.use(
  new GoogleStrategy(
    {
      clientID: "YOUR_GOOGLE_CLIENT_ID",
      clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      const usersData = loadData();
      let user = usersData.users.find((u) => u.googleId === profile.id);

      if (!user) {
        user = {
          id: Date.now(),
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
        };
        usersData.users.push(user);
        saveData(usersData);
      }

      done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "YOUR_FACEBOOK_CLIENT_ID",
      clientSecret: "YOUR_FACEBOOK_CLIENT_SECRET",
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "emails"],
    },
    (accessToken, refreshToken, profile, done) => {
      const usersData = loadData();
      let user = usersData.users.find((u) => u.facebookId === profile.id);

      if (!user) {
        user = {
          id: Date.now(),
          facebookId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
        };
        usersData.users.push(user);
        saveData(usersData);
      }

      done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const usersData = loadData();
  const user = usersData.users.find((u) => u.id === id);
  done(null, user);
});
