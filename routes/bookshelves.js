var express = require('express');
var router = express.Router();
const { asyncHandler, csrfProtection } = require('../utils');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { requireAuth } = require('../auth');



router.get('/', requireAuth, asyncHandler(async(req,res) => {
    const { userId } = req.session.auth;
    const bookshelves = await db.Bookshelf.findAll({ where: { userId }});
    res.render('bookshelves', { title: "Bookshelves", bookshelves });
}));

router.get('/add', requireAuth, csrfProtection, (req,res) => {
    const bookshelf = db.Bookshelf.build();
    res.render('add-bookshelf', { title: "Add a Bookshelf", bookshelf, csrfToken: req.csrfToken() });
});

const bookshelfValidators = [
    check("name")
        .exists({ checkFalsy:true })
        .withMessage("This bookshelf needs a name"),
];

router.post('/add', requireAuth, bookshelfValidators, csrfProtection, asyncHandler(async(req,res) => {
    const { userId } = req.session.auth;
    const { name } = req.body;
    const validatorErrors = validationResult(req);
    const duplicate = await db.Bookshelf.findAll({where: {name, userId}});
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

router.get('/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async(req,res,next) => {
    const bookshelfId = req.params.id;
    const { userId } = req.session.auth;
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId);

    if (bookshelf && userId === bookshelf.userId) res.render('bookshelf', { title: "Bookshelf", bookshelf, csrfToken: req.csrfToken()});
    else next();
}));

router.post('/delete/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async(req, res, next) => {
    const bookshelfId = req.params.id;
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId);
    try {
        await bookshelf.destroy();
    } catch(e) {
        next(e);
    }
    res.redirect('/bookshelves');
}));

router.post('/edit/:id(\\d+)', requireAuth, bookshelfValidators, csrfProtection, asyncHandler(async(req, res, next) => {
    const bookshelfId = req.params.id;
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId);
    try {
        await bookshelf.update({
            name: req.body.name
        });
    } catch(e) {
        next(e);
    }
    res.redirect('/bookshelves');
}));

router.get('/edit/:id(\\d+)', requireAuth, bookshelfValidators, csrfProtection, asyncHandler(async(req, res, next) => {
    const bookshelfId = req.params.id;
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId);
    res.render('bookshelf-edit', { title: "Edit Bookshelf", bookshelf, csrfToken: req.csrfToken()})
}));

module.exports = router;
