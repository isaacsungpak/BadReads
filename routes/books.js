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

router.post('/random', async(req, res) => {
  const {book1Id, book2Id, book3Id, suggestionNo} = req.body;
  // console.log('we are here', req.body, book1Id, suggestionNo);
  const books = await db.Book.findAll();
  // const bookIdSet = new Set();
  // bookIdSet.add(book1Id);
  // bookIdSet.add(book2Id);
  // bookIdSet.add(book3Id);

  //alternatively
  const bookIdArr = [];
  bookIdArr.push(book1Id);
  bookIdArr.push(book2Id);
  bookIdArr.push(book3Id);
  let randomBookId;
  let newBookIdArr;
  // let max;
// console.log(max);
   let getRandomBookId = (max) => {
    randomBookId= Math.floor(Math.random() * (max - 1) + 1);
    return randomBookId
  }

  getRandomBookId(books.length);

  console.log('testingID', getRandomBookId(books.length), randomBookId);
  console.log('testingID', randomBookId);
 
   const nextRandomBook = await db.Book.findOne({
        where: {id: randomBookId}
      });

      // console.log('testingBOOK', nextRandomBook);
      console.log('truefalse', bookIdArr.includes(randomBookId.toString()));
      console.log('suggestionNo', suggestionNo);

      //this function isnt running automatically???
  let recursion = () => {
    if (!bookIdArr.includes(randomBookId.toString())) {
      console.log('before splice array', bookIdArr);
      //turn set into array
      // let bookIdArr = Array.from(bookIdSet);
      //replace array value with new ID 
      if (suggestionNo === '1') bookIdArr.splice(0,1,randomBookId.toString());
      if (suggestionNo === '2') bookIdArr.splice(1,1,randomBookId.toString());
      if (suggestionNo === '3') bookIdArr.splice(2,1,randomBookId.toString());
      console.log('spliced array', bookIdArr);
      newBookIdArr = bookIdArr
      //find the next book which returns and ends the 
          return nextRandomBook;
        } else {
          // how do I tell which number in the set needs to be updated based on the request? 
          console.log('if true, we get here');
          getRandomBookId(books.length);
          recursion();
    }
}
recursion();

    // bookIdArr.forEach(ele => {
    //   if (i === 0) {
    //     bookIdArr.splice(0,1,randombookId)
    //   } else if (i === 1) {
    //     bookIdArr.splice(1,1,randombookId)
    //   } else {
    //     bookIdArr.splice(2,1,randombookId)
    //   }
    // })

      //responding to fetch in index.js
      res.json({nextRandomBook, newBookIdArr});
      // res.json(newBookIdArr);
    });

/* GET books id. */
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const bookId = req.params.id;
  const book = await db.Book.findByPk(bookId, {include: [db.Author, db.Genre]});
  const reviews = await db.Review.findAll({ where: { bookId }, include: db.User })
  let userId = req.session.auth;
  let newValue = 0;
  if (req.session.auth) {
   userId = req.session.auth.userId
  }
  res.render('book', { title: 'Badbook', book, reviews, userId});
}));


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


router.get('/:id(\\d+)/ratings', csrfProtection, asyncHandler(async(req, res, next) => {
  let userRating;
  const bookId = req.params.id;
  const defaultStars = 4;
  if (req.session.auth) {
    const {userId} = req.session.auth;
    userRating = await db.Rating.findOne({where: {bookId, userId}})

  }
  const ratings = await db.Rating.findAll({ where: { bookId }});
    let average = ratings.reduce(function (sum, rating) {
      return sum + rating.value;
    }, 0) / (ratings.length ? ratings.length : 1);

  res.send({userRating, average})
}));

router.post('/:id(\\d+)/ratings', requireAuth, asyncHandler(async(req, res, next) => {
  console.log('reqbody', req.body);
  const {userId} = req.session.auth;
  const bookId = req.params.id;

  // if (!userId) {
  //   res.redirect('/users/login');
  // }

  let rating = await db.Rating.findOne({where: {userId, bookId}})
  let {value} = req.body;
  if (rating) {
    await rating.update({value})
  } else {
    await db.Rating.create({value, userId, bookId})
  }
  const ratings = await db.Rating.findAll({ where: { bookId }});
  let average = ratings.reduce(function (sum, rating) {
    return sum + rating.value;
  }, 0) / (ratings.length);
  console.log(average);
  res.send({average})
}));


module.exports = router;
