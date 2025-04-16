const express = require('express');
const router = express.Router();
const ModelController = require("../controllers/modelController")

router.post('path',ModelController.example);

module.exports = router;