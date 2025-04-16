const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")

router.post('/gala',UserController.create);

module.exports = router;