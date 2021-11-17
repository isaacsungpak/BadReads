const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../auth')
const { check, validationResult } = require('express-validator')

/* GET books. */
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({ include: db.Author })
  if (req.session.auth) {
    const { userId } = req.session.auth;
    const bookshelves = await db.Bookshelf.findAll({ where: { userId } });
    res.render('books', { title: 'BadReads Books', books, bookshelves, csrfToken: req.csrfToken() });
  } else {
    res.render('books', { title: 'BadReads Books', books });
  }
}))

/* GET books id. */
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const book = await db.Book.findByPk(bookId, {include: [db.Author, db.Genre]});
  const reviews = await db.Review.findAll({ where: { bookId }, include: db.User })
  let newValue = 0;
  const { userId } = req.session.auth;
  const rating = await db.Rating.findAll({where: {userId, bookId}});
  console.log("**************", rating)
  if (rating) {
    //update rating where userId has already rated
    await db.Rating.update({value: newValue}, {where: {bookId: bookId}});

  } else {
    //submit rating where user has not rated
      await db.Rating.create({ value, userId, bookId });
  }
  res.render('book', { title: 'Badbook', book, reviews});

}))
// testing


router.get('/:id(\\d+)/reviews/add', requireAuth, csrfProtection, (req, res) => {
  const bookId = req.params.id;
  const review = db.Review.build();
  res.render('add-review', { title: "Add a Review", review, csrfToken: req.csrfToken(), bookId });
});

const reviewValidators = [
  check("reviewHeader")
    .exists({ checkFalsy: true })
    .withMessage("This review needs a title"),
  check("reviewBody")
    .exists({ checkFalsy: true })
    .withMessage("This review needs a body"),
];

router.post('/:id(\\d+)/reviews/', requireAuth, reviewValidators, csrfProtection, asyncHandler(async (req, res) => {

  const bookId = req.params.id;
  const { userId } = req.session.auth
  const { reviewBody, reviewHeader } = req.body
  const review = db.Review.build({
    reviewHeader,
    reviewBody,
    bookId,
    userId
  })

  const validatorErrors = validationResult(req)

  if (validatorErrors.isEmpty()) {
    await review.save()
    res.redirect(`/books/${bookId}`);
  } else {
    const errors = validationErrors.array().map(e => e.msg)
    res.render('add-review', {
      title: 'Add Review',
      review,
      csrfToken: req.csrfToken(),
      errors
    })
  }
}))

router.post('/:id(\\d+)/bookshelves', requireAuth, csrfProtection, asyncHandler(async(req,res,next) => {
  const bookId = req.params.id;
  const { userId } = req.session.auth;
  const { bookshelfId } = req.body;
  const bookshelf = await db.Bookshelf.findByPk(bookshelfId);

  if (userId == bookshelf.userId) {
    db.BooksOnBookshelf.create({ bookId, bookshelfId });
    res.redirect('/books');
  } else {
    const books = await db.Book.findAll({ include: db.Author })
    const bookshelves = await db.Bookshelf.findAll({ where: { userId } });
    const errors = ["You do not have permission to add to that bookshelf"];
    res.render('books', { title: 'BadReads Books', books, bookshelves, csrfToken: req.csrfToken(), errors });
  }
}));


// router.get('/:id(\\d+)/ratings', requireAuth, csrfProtection, asyncHandler(async(req, res, next) => {
//   const bookId = req.params.id;
//   const book = await db.Book.findByPk(bookId, {include: [db.Author, db.Genre]});
//   const reviews = await db.Review.findAll({ where: { bookId }, include: db.User })
//   let newValue = 0;
//   const { userId } = req.session.auth;
//   const rating = await db.Rating.findAll({where: {userId, bookId}});
//   console.log("**************", rating)
//   if (rating) {
//     //update rating where userId has already rated
//     await db.Rating.update({value: newValue}, {where: {bookId: bookId}});

//   } else {
//     //submit rating where user has not rated
//       await db.Rating.create({ value, userId, bookId });
//   }
//   res.render('book', { title: 'Badbook', book, reviews});

// }))

module.exports = router;
