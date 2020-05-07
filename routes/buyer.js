const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const BuyerController = require('../controllers/BuyerController');


router.post('/buyer/login', BuyerController.login);

module.exports = router;