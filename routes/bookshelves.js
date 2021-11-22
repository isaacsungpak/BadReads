var express = require('express');
var router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { requireAuth } = require('../auth');


router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const bookshelves = await db.Bookshelf.findAll({ where: { userId } });
    res.render('bookshelves', { title: "Bookshelves", bookshelves });
}));

router.get('/add', requireAuth, csrfProtection, (req, res) => {
    const bookshelf = db.Bookshelf.build();
    res.render('add-bookshelf', { title: "Add a Bookshelf", bookshelf, csrfToken: req.csrfToken() });
});

const bookshelfValidators = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("This bookshelf needs a name"),
];

router.post('/add', requireAuth, bookshelfValidators, csrfProtection, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const { name } = req.body;
    const validatorErrors = validationResult(req);
    const duplicate = await db.Bookshelf.findAll({ where: { name, userId } });
    const bookshelf = db.Bookshelf.build({ name, userId });

    if (validatorErrors.isEmpty() && !duplicate.length) {
        await bookshelf.save();
        const shelf = await db.Bookshelf.findOne({ where: { name, userId } });
        console.log('shelf', shelf);
        res.redirect(`/bookshelves/${shelf.id}`);
    } else if (duplicate.length) {
        const errors = ["You already have a bookshelf with this name"];
        res.render("add-bookshelf", { title: "Add a Bookshelf", bookshelf, csrfToken: req.csrfToken(), errors });
    } else {
        const errors = validatorErrors.array().map(e => e.msg);
        res.render("add-bookshelf", { title: "Add a Bookshelf", bookshelf, csrfToken: req.csrfToken(), errors });
    }
}));

router.get('/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const bookshelfId = req.params.id;
    const { userId } = req.session.auth;
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId, { include: { model: db.Book, include: [db.Author, db.Genre] } });

    if (bookshelf && userId === bookshelf.userId) {
        let booksWithDetails = new Array(bookshelf.Books.length);
        for (let i = 0; i < bookshelf.Books.length; i++) {
            const longDate = bookshelf.Books[i].BooksOnBookshelf.createdAt;
            const month = longDate.getMonth() + 1;
            const day = longDate.getDate();
            const year = longDate.getYear() + 1900;

            const bookId = bookshelf.Books[i].id;
            const allRatings = await db.Rating.findAll({ where: { bookId } });
            const avgRating = allRatings.reduce((sum, e) => (sum + e.value), 0) / (allRatings.length ? allRatings.length : 0);
            const userRating = await db.Rating.findOne({ where: { userId, bookId } });

            booksWithDetails[i] = {
                book: bookshelf.Books[i],
                dateAdded: `${month}/${day}/${year}`,
                avgRating: avgRating ? avgRating.toFixed(2) : "Not yet rated",
                userRating: userRating ? userRating.value : "Not yet rated",
                longDate: longDate
            }
        }

        booksWithDetails = booksWithDetails.sort((a,b) => (a.longDate.getTime() - b.longDate.getTime()));

        for (let j = 0; j < booksWithDetails.length; j++) {
            booksWithDetails[j].orderNum = j + 1;
        }

        res.render('bookshelf', { title: "Bookshelf", bookshelf, csrfToken: req.csrfToken(), books: booksWithDetails });
    } else {
        const errors = [];

        if (bookshelf) errors.push('You do not have permission to view this bookshelf.')
        else errors.push('This bookshelf does not exist.');

        const bookshelves = await db.Bookshelf.findAll({ where: { userId } });
        res.render('bookshelves', { title: "Bookshelves", bookshelves, errors });
    }
}));

router.post('/delete/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
    const bookshelfId = req.params.id;
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId);
    const booksOnBookshelf = await db.BooksOnBookshelf.findAll({where: { bookshelfId }});
    try {
        for(let i = 0; i < booksOnBookshelf.length; i++) {
            await booksOnBookshelf[i].destroy();
        }
        await bookshelf.destroy();
    } catch(e) {
        next(e);
    }
    res.redirect('/bookshelves');
}));

router.post('/edit/:id(\\d+)', requireAuth, bookshelfValidators, csrfProtection, asyncHandler(async (req, res, next) => {
    const bookshelfId = req.params.id;
    const { userId } = req.session.auth;
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId);
    //
    const { name } = req.body
    const newBookshelf = {
        name,
        userId
    }

    const validatorErrors = validationResult(req)
    if (validatorErrors.isEmpty()) {
        await bookshelf.update(newBookshelf)
        res.redirect('/bookshelves');
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('bookshelf-edit', { title: "Edit Bookshelf", bookshelf, errors, csrfToken: req.csrfToken() })
    }
}));

router.get('/edit/:id(\\d+)', requireAuth, bookshelfValidators, csrfProtection, asyncHandler(async (req, res, next) => {
    const bookshelfId = req.params.id;
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId);
    res.render('bookshelf-edit', { title: "Edit Bookshelf", bookshelf, csrfToken: req.csrfToken() })
}));

router.post('/:bookshelfId(\\d+)/books/:bookId(\\d+)/delete', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
    const { bookId, bookshelfId } = req.params;
    const bookToShelfAssociation = await db.BooksOnBookshelf.findOne({ where: { bookId, bookshelfId } });
    try {
        await bookToShelfAssociation.destroy();
    } catch (e) {
        next(e);
    }
    res.redirect(`/bookshelves/${bookshelfId}`);
}));

module.exports = router;
