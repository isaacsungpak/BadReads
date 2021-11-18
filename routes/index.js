var express = require('express');
var router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({cookie: true})
const db = require('../db/models')



/* GET home page. */
router.get('/', async(req, res, next) => {
const reviews = await db.Review.findAll({
  limit: 10,
  order: [['updatedAt', 'DESC']],
  include: [db.Book, db.User ]
})

  res.render('index', { title: 'BadReads Home', reviews });
});



module.exports = router;
