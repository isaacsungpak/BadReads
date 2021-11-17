const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { asyncHandler, csrfProtection } = require('../utils');


/* GET books. */
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({ include: db.Author })
  if (req.session.auth) {
    const { userId } = req.session.auth;
    const bookshelves = await db.Bookshelf.findAll({ where: { userId } });
    res.render('books', { title: 'BadReads Books', books, bookshelves, csrfProtection });
  } else {
    res.render('books', { title: 'BadReads Books', books });
  }
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
