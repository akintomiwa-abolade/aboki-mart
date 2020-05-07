const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const BuyerController = require('../controllers/BuyerController');


/**
 * @api {post} /admin/login Admin Entity login.
 * @apiName AdminLogin
 * @apiGroup Admin
 *
 * @apiParam {String} phone Admin phone number.
 * @apiParam {String} password Admin Password.
 *
 * @apiSuccess {Number} id Admin unique ID.
 * @apiSuccess {String} first_name Firstname of the admin.
 * @apiSuccess {String} last_name Lastname of the admin.
 * @apiSuccess {String} phone Admin Phone number.
 * @apiSuccess {String} email Admin Email Address.
 * @apiSuccess {Number} business_id Admin business id.
 * @apiSuccess {String} token Admin auth token.

 * @apiSuccessExample Success-Response:
 *     STATUS CODE 200 OK
 *     {
 *       "error": false,
 *       "message": "Login Successful."
 *       "data": {
 *       "first_name": "Mayowa",
 *       "last_name": "Abolade",
 *       "phone": "07030090562",
 *       "email": "tommy@gmail.com",
 *       "token": "$2a$10$g7AyDure8J/DQXBCFhxQGu6zCLEkRvXJClNU0Yw5AUo28Kb2W4uIm",
 *       "business_id": 2
 *         }
 *     }
 *
 * @apiError AdminNotFound The admin phone was not found.
 *
 * @apiErrorExample Error-Response:
 *     STATUS CODE 404 Not Found
 *       {
 *           "error": true,
 *           "message": "Authentication failed. Wrong password"
 *       }
 *
 */

router.post('/buyer/login', BuyerController.login);