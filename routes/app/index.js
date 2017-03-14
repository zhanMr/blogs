'use strict'
let express = require('express');
let router = express.Router();
let query = require('../service/db');

router.get('/', (req, res) => {
  res.render('app/app', { title: '博客' });
});
router.post('/', (req, res) => {
    query('select * from content', (err, rows, fields) => {
          res.json({
            data: rows
          })
    });
});

module.exports = router;
