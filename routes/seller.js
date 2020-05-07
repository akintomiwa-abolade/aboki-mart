const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const SellerController = require('../controllers/SellerController');


router.post('/seller/login', SellerController.login);

router.post('/seller/create-currency-sales', auth, SellerController.createCurrencySales);

module.exports = router;