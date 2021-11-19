const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../auth')
const { check, validationResult } = require('express-validator')

/* GET books. */
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({ include: db.Author });
  if (req.session.auth) {
    const { userId } = req.session.auth;
    const bookshelves = await db.Bookshelf.findAll({ where: { userId } });
    res.render('books', { title: 'BadReads Books', books, bookshelves, csrfToken: req.csrfToken() });
  } else {
    res.render('books', { title: 'BadReads Books', books });
  }
  
}))

router.get('/random', async(req, res, next) => {
  //necessary inclusion from index.js for re-render?
  // const reviews = await db.Review.findAll({
  //   limit: 10,
  //   order: [['updatedAt', 'DESC']],
  //   include: [db.Book, db.User ]
  // }); 
  //logic for random book suggestions in index.js
  let randomNum= Math.random();
  const books = await db.Book.findAll();
  const randomBookId = Math.round((books.length * randomNum));
  const nextRandomBook = await db.Book.findOne({
        where: {id: randomBookId}
      });
      //responding to fetch in index.js
      res.send({nextRandomBook});
    });

/* GET books id. */
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const book = await db.Book.findByPk(bookId, { include: [db.Author, db.Genre] });
  const reviews = await db.Review.findAll({ where: { bookId }, include: db.User })
  let { userId } = req.session.auth;
  const userReviews = await db.Review.findAll({
    where: {
      bookId,
      userId
    }
  })
  console.log(userReviews)
  let newValue = 0;
  if (req.session.auth) {
    userId = req.session.auth.userId
  }
  res.render('book', { title: 'Badbook', book, reviews, userReviews, userId, bookId, csrfToken: req.csrfToken() });
}));
// get -> post
router.post('/:id(\\d+)/reviews/add', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const book = await db.Book.findByPk(bookId, { include: [db.Author, db.Genre] });
  const review = db.Review.build();
  const { userId } = req.session.auth
  const reviews = await db.Review.findAll({ where: { bookId }, include: db.User })
  res.render('add-review', { title: "Add a Review", review, csrfToken: req.csrfToken(), bookId, reviews, book });


}));

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
// ----
router.get('/:id(\\d+)/reviews/edit/:reviewId(\\d+)', requireAuth, reviewValidators, csrfProtection, asyncHandler(async (req, res, next) => {
  const reviewId = req.params.reviewId
  const bookId = req.params.id;
  const { userId } = req.session.auth
  const review = await db.Review.findOne({
    where: {
      bookId,
      userId
    }
  });
  res.render('review-edit', { title: "Edit Review", userId, bookId, reviewId, review, csrfToken: req.csrfToken() })
}));

router.post('/:id(\\d+)/reviews/edit/:reviewId(\\d+)', requireAuth, reviewValidators, csrfProtection, asyncHandler(async (req, res, next) => {
  const bookId = req.params.id;
  const { userId } = req.session.auth
  const review = await db.Review.findOne({
    where: {
      bookId,
      userId
    }
  });
  try {
    await review.update({
      reviewHeader: req.body.reviewHeader,
      reviewBody: req.body.reviewBody
    });
  } catch (e) {
    next(e);
  }
  res.redirect(`/books/${bookId}`);
}));

// require csrf token?
router.post('/:id(\\d+)/reviews/delete/:reviewId(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
  const bookId = req.params.id;
  const { userId } = req.session.auth
  const review = await db.Review.findOne({
    where: {
      bookId,
      userId,
    }
  });

  try {
    await review.destroy();
  } catch (e) {
    next(e);
  }
  res.redirect(`/books/${bookId}`);
}));

// ----
router.post('/:id(\\d+)/bookshelves', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
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


router.get('/:id(\\d+)/ratings', csrfProtection, asyncHandler(async (req, res, next) => {
  let userRating;
  const bookId = req.params.id;
  const defaultStars = 4;
  if (req.session.auth) {
    const { userId } = req.session.auth;
    userRating = await db.Rating.findOne({ where: { bookId, userId } })

  }
  const ratings = await db.Rating.findAll({ where: { bookId } });
  let average = ratings.reduce(function (sum, rating) {
    return sum + rating.value;
  }, 0) / (ratings.length ? ratings.length : 1);

  res.send({ userRating, average })
}));

router.post('/:id(\\d+)/ratings', requireAuth, asyncHandler(async (req, res, next) => {
  console.log('reqbody', req.body);
  const { userId } = req.session.auth;
  const bookId = req.params.id;

  // if (!userId) {
  //   res.redirect('/users/login');
  // }

  let rating = await db.Rating.findOne({ where: { userId, bookId } })
  let { value } = req.body;
  if (rating) {
    await rating.update({ value })
  } else {
    await db.Rating.create({ value, userId, bookId })
  }
  const ratings = await db.Rating.findAll({ where: { bookId } });
  let average = ratings.reduce(function (sum, rating) {
    return sum + rating.value;
  }, 0) / (ratings.length);
  console.log(average);
  res.send({ average })
}));


module.exports = router;
