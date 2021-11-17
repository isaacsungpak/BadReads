var express = require('express');
var router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({cookie: true})
const db = require('../db/models')



/* GET home page. */
router.get('/', async(req, res, next) => {
  const books = await db.Book.findAll({
    order: [['title', 'ASC']],
    // includes: db.Review
  })
  res.render('index', { title: 'BadReads Home', books });
});

module.exports = router;
