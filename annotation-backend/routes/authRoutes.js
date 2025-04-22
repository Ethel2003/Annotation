//On a trafiqué quelque chose ici
const express = require('express');
const router = express.Router();
const AuthController = require("../controllers/authController")

router.post('/login', () => {}); //AuthController.create

module.exports = router;