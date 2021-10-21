var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'rohit',
  port: 5432
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  pool.query('SELECT * FROM "USERS"', (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results);
  })
});

module.exports = router;