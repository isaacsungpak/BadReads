const express = require('express');
const router = express.Router();
const db = require('../db/models');
// const {bookIdArr} = require('./index');
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

router.post('/random', async (req, res) => {
  //destructure req.body
  const { book1Id, book2Id, book3Id, suggestionNo } = req.body;
  // find all books

  const books = await db.Book.findAll();
  //create currently displayed books array
  const bookIdArr = [];
  bookIdArr.push(book1Id);
  bookIdArr.push(book2Id);
  bookIdArr.push(book3Id);
  let newBookIdArr;

  //runs the functions
  getRandomBookId(books.length);


  function getRandomBookId(max) {
    randomBookId = Math.floor(Math.random() * (max - 1) + 1);
    //calls for the next randombook using random id
    getNextRandomBook(randomBookId);
  }

  //function to get the next book object
  async function getNextRandomBook(randomBookId) {
    const nextRandomBook = await db.Book.findOne({

      where: { id: randomBookId }
    });
    recursion(nextRandomBook)
  }

  //checks if the next random book is in the array, if it is then we restart the process at getrandombookid()
  let recursion = (nextRandomBook) => {
    if (!bookIdArr.includes(randomBookId.toString())) {
      if (suggestionNo === '1') bookIdArr.splice(0, 1, randomBookId.toString());
      if (suggestionNo === '2') bookIdArr.splice(1, 1, randomBookId.toString());
      if (suggestionNo === '3') bookIdArr.splice(2, 1, randomBookId.toString());
      //after splice, set newBookIdArr values
      newBookIdArr = bookIdArr
      let theNextRandomBook = nextRandomBook;
      res.json({ theNextRandomBook, newBookIdArr });
      return
    } else {
      getRandomBookId(books.length);
    }
  }

});

/* GET books id. */
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const book = await db.Book.findByPk(bookId, { include: [db.Author, db.Genre] });
  const reviews = await db.Review.findAll({ where: { bookId }, include: db.User })
  const ratings = await db.Rating.findAll({ where: { bookId } })
  let userId;
  let bookshelves;
  let userReviews;

  let average = ratings.reduce(function (sum, rating) {
    return sum + rating.value;
  }, 0) / (ratings.length);
  let averageTwoDec = average.toFixed(2);


  if (req.session.auth) {
    userId = req.session.auth.userId
    bookshelves = await db.Bookshelf.findAll({ where: { userId } });
    userReviews = await db.Review.findAll({
      where: {
        bookId,
        userId
      }
    })
  }
  res.render('book', { title: 'Badbook', bookshelves, book, reviews, userReviews, userId, bookId, ratings, average, averageTwoDec, csrfToken: req.csrfToken() });
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
    const errors = validatorErrors.array().map(e => e.msg)
    res.render('add-review', {
      title: 'Add Review',
      review,
      csrfToken: req.csrfToken(),
      errors,
      bookId,
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
  const reviewId = req.params.reviewId
  const { userId } = req.session.auth
  const review = await db.Review.findOne({
    where: {
      bookId,
      userId
    }
  });
  //
  const validatorErrors = validationResult(req)

  if (validatorErrors.isEmpty()) {
    await review.update({
      reviewHeader: req.body.reviewHeader,
      reviewBody: req.body.reviewBody
    });
    res.redirect(`/books/${bookId}`);
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('review-edit', { title: "Edit Review", userId, bookId, reviewId, review, errors, csrfToken: req.csrfToken() })
  }
  //


  // try {
  //   await review.update({
  //     reviewHeader: req.body.reviewHeader,
  //     reviewBody: req.body.reviewBody
  //   });
  // } catch (e) {
  //   next(e);
  // }
  // res.redirect(`/books/${bookId}`);
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
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId;
    userRating = await db.Rating.findOne({ where: { bookId, userId } })
  }
  const ratings = await db.Rating.findAll({ where: { bookId } });
  let average = ratings.reduce(function (sum, rating) {
    return sum + rating.value;
  }, 0) / (ratings.length ? ratings.length : 1);

  res.send({ userRating, average, userId })
}));

router.post('/:id(\\d+)/ratings', requireAuth, asyncHandler(async (req, res, next) => {
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

  res.send({ average })
}));


module.exports = router;
