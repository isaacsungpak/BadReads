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
let randomNum= Math.random();
const books = await db.Book.findAll();
const randomBookId = Math.round((books.length * randomNum));
const randomBook = await db.Book.findOne({
      where: {id: randomBookId}
    });
    res.render('index', { title: 'BadReads Home', reviews, randomBook});
});





module.exports = router;
