var express = require('express');
var router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const db = require('../db/models');

const { asyncHandler } = require('../utils');
const { requireAuth } = require('../auth')
const { check, validationResult } = require('express-validator')

/* GET books. */
router.get('/', asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({
    // order: [['title', 'ASC']],
    // order: sequelize.random()
  })
  res.render('books', { title: 'BadReads Books', books });
}))

/* GET books id. */
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const reviews = await db.Review.findAll({
    where: { bookId }
  })
  const book = await db.Book.findByPk(bookId, {
    include: [
      db.Author,
      db.Genre,
      {
        model: db.User,
        as: 'bookReviews'
      }]
  })

  res.render('book', { title: 'Badbook', book, reviews });
}))


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

module.exports = router;
