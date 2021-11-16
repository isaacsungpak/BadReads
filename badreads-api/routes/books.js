var express = require('express');
var router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const db = require('../db/models');

const {Book, Review, Rating, Genre, Author, User} = require('../db/models')

const { asyncHandler } = require('../utils');
const { log } = require('debug');


/* GET books. */
router.get('/', asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({
    // order: [['title', 'ASC']],
    // order: sequelize.random()
  })
  res.render('books', { title: 'BadReads Books', books });
}))

/* GET books id. */
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const bookId = req.params.id;
  const book = await db.Book.findByPk(bookId, {
    include: [
      db.Author,
      db.Genre,
      {
          model: db.User,
          as: 'bookReviews'
        }]
      })
      console.log(book.bookReviews[0].username)
      console.log(book.bookReviews[0].Review.reviewBody)
      res.render('book', {title: 'Badbook', book});
    }))



    //   include: [{
    //     model: user,
    //     as: userReviews,
    //   },
    //   {
    //     model: book,
    //     as: userRatings
    //   },
    //   {model: user,
    //   }
    // ]
      //include user ?
      // include: {
      //   model: Review
      // },
      // include: {
      //   model: Rating
      // }

module.exports = router;
