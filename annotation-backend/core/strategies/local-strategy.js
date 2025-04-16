const passport = require("passport"),
  { dataCrypt, dataDecrypt } = require("../../core/crypto/CryptDecrypt.js"),
  LocalStrategy = require("passport-local").Strategy;
const { request } = require("express");
const UserService = require("../../services/Developers/developersService.js");

passport.serializeUser(function (user, done) {
  console.log("Inside serialization");
  // Implement user serialization logic
  process.nextTick(function () {
    return done(null, user.login);
  });
});

passport.deserializeUser(function (login, done) {
  console.log(`Inside de serialization : ${login}`);

  process.nextTick(function () {
    // Implement user deserialization logic
    try {
      const loggedUser = UserService.getOneDev({ login: login });
      if (!loggedUser) throw new Error("Utilisateur non trouvé !");
      return done(null, user);
    } catch (e) {
      return done(e, null);
    }
  });
});

module.exports = passport.use(
  new LocalStrategy(
    {
      usernameField: "login",
    },
    async (username, password, done) => {

      try {
        const user = await UserService.getOneDev({ login: username });

        if (!user) {
          done(null, false, {
            message: "L'Utilisateur n'existe pas dans notre base de données.",
          });
        }

        if (!user.password) {
          UserService.updateDev(
            { login: username },
            { password: dataCrypt(password) });

        } else {

          let unHashedPassword = dataDecrypt(user.password);

          if (unHashedPassword != password) {

            done(null, false, {
              message: "Votre mot de passe est incorrect!",
            });
          }


        }
        done(null, user);

      } catch (e) {
        done(e, null);
      }
    }
  )
);
