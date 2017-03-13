'use strict'
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('webapp/index', { title: '订' });
}).post('/', (req, res) => {
  res.json({
    aa: '123'
  })
});



module.exports = router;
