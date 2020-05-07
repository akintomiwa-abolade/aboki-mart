const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const SellerController = require('../controllers/SellerController');


router.post('/seller/login', SellerController.login);

module.exports = router;