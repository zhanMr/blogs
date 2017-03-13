'use strict'
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('webapp/index', { title: '首页' });
});

module.exports = router;
