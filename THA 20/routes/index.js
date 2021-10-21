var express = require('express');
var router = express.Router();
var registerInitialChecks = require('../middlewares/registerChecks');
var { register, registerSuperAdmin } = require('../controllers/register');
var check = require("../middlewares/checkSuperAdmin")
const { log } = require('debug');

/* Home page. */
router.get('/', function (req, res, next) {
  const sess = req.session;
  sess.username = 'rohit';
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
  console.log('Redis Value', req.session.username);
  const sess = req.session;
  res.render('index', { title: 'Express' });
});

/**
 * @requires {email , password , cofirm password} -req.body
 * @description
 * Security , Performances , Edge Cases
 * Lv -1
 * email validate -string
 * password validation 
 * password == confirm password
 * Lv -2
 * JS/SQL injection
 * Lv-3
 * Check if email already exists
 * password hashing - security
 * email lowercasey
 * save
 */

router.post("/register", (registerInitialChecks, register));
router.post("/register-super-admin", (registerInitialChecks, registerSuperAdmin));
router.get('/super', check);

module.exports = router;