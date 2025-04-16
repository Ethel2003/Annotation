//ldapjs-strategy

const passport = require("passport");
const CustomStrategy = require("passport-custom").Strategy;
const ldap = require("ldapjs");
const UserService = require("../../services/Developers/developersService.js"),
  { dataCrypt } = require("../../core/crypto/CryptDecrypt.js");

const logger = require("../logging/globalLogging.js");

passport.serializeUser(function (user, done) {
  console.log("Inside serialization");
  // Implement user serialization logic
  process.nextTick(function () {
    return done(null, user.login);
  });
});

passport.deserializeUser(function (login, done) {
  console.log(`Inside de deserialization : ${login}`);

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

passport.use(
  "ldap",
  new CustomStrategy(async function (req, done) {
    // Initialiser un client LDAP
    const client = ldap.createClient({ url: process.env.LDAP_BASE_DN });

    // Credentials de l'utilisateur
    let userLogin = req.params.login || req.query.login || req.body.login;
    let password = req.params.password || req.query.password || req.body.password;

    // Formater correctement le DN de l'utilisateur
    let username = `CHEM\\${userLogin}`;

    // TODO: implementer une logique de traitement de l'erreur
    client.on("connecting", (err) => {
      logger.error({
        message:
          "Erreur lors de la mise en stream. Mise en attente echouée ! \r\n",
        error: err,
      },
        null
      );
    });

    // Ecouter le stream de la connection au client LDAP et réagir en cas d'erreur de connection
    // TODO: implementer une logique de traitement de l'erreur
    client.on("error", (err, r) => {

      logger.error({
        message:
          "Erreur lors de la mise en stream. Mise en attente echouée ! \r\n",
        error: err,
      },
        null
      );
    });

    // Connexion et bind au serveur LDAP
    client.bind(username, password, async (err, r) => {
      if (err) {
        done({ message: "Echec de l'authentification au ldap.", error: err }, null);
      }
      else {

        const user = await UserService.getOneDev({
          login: userLogin,
        });
        await UserService.updateDev(
          { login: userLogin },
          { password: dataCrypt(password) }
        );
        done(null, user);
      }
    });
  })
);
