var express = require('express');
var router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const db = require('../db/models');

// const {Book} = require('../db/models/book')

const { asyncHandler } = require('../utils');
const { log } = require('debug');


/* GET books. */
router.get('/', asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({
    // order: [['title', 'ASC']],
    // order: sequelize.random()
  })
  console.log(books)
  res.render('books', { title: 'BadReads Books', books });
}))

/* GET books id. */





module.exports = router;