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
}); 
//logic for random book suggestions in index.js
const books = await db.Book.findAll();

function getRandomBookId(max) {
  let randomBookId= Math.floor(Math.random() * (max - 1) + 1);
  return randomBookId
}
// let randomNum= Math.floor(Math.random() * (books.length - 1) + 1);
// let randomNum2= Math.floor(Math.random() * (books.length - 1) + 1);
// let randomNum3= Math.floor(Math.random() * (books.length - 1) + 1);
const bookIdSet = new Set();
for(i = 0; i < 4; i++) {
  while (bookIdSet.size < 3) {
      bookIdSet.add(getRandomBookId(books.length));
  }
}
// const totalBooks = books.length;
let bookIdArr = Array.from(bookIdSet);
// document.cookie = `bookIds=${bookIdArr}`;
// bookIdStorage = window.localStorage;
// bookIdStorage.setItem('bookIds', bookIdArr);
const randomBookId = bookIdArr[0]
const randomBookId2 = bookIdArr[1]
const randomBookId3= bookIdArr[2]

const randomBook = await db.Book.findOne({
  where: {id: randomBookId}
});
const randomBook2 = await db.Book.findOne({
  where: {id: randomBookId2}
});
const randomBook3 = await db.Book.findOne({
  where: {id: randomBookId3}
});
    res.render('index', { title: 'BadReads Home', reviews, randomBook, randomBook2, randomBook3});
});





module.exports = router;
