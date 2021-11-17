var express = require('express');
var router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const db = require('../db/models');

// router.get('/add', requireAuth, csrfProtection, (req, res) => {
//     const review = db.Review.build();
//     res.render('add-review', { title: "Add a Review", review, csrfToken: req.csrfToken() });
// });

// const reviewValidators = [
//     check("reviewHeader")
//         .exists({ checkFalsy: true })
//         .withMessage("This review needs a title"),
//     check("reviewBody")
//         .exists({ checkFalsy: true })
//         .withMessage("This review needs a body"),
// ];

// router.post('/books/:id(\\d+)/review/add', requireAuth, reviewValidators, csrfProtection, asyncHandler(async (req, res) => {

//     const { userId, bookId } = req.session.auth;



// }))

module.exports = router
