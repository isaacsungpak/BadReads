const express = require('express');
const router = express.Router();
const {csrfProtection, asyncHandler} = require('../utils.js');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models')


/* creating new user. */
router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build()
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken()
  })
});

const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a first name")
    .isLength({ max: 50 })
    .withMessage("First Name cannot be more than 50 characters long"),

  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a last name")
    .isLength({ max: 50 })
    .withMessage("Last Name cannot be more than 50 characters long"),

  check('emailAddress')
    .exists({ checkFalsy: true})
    .withMessage("Please provide a valid email")
    .isLength({ max: 255 })
    .withMessage("Email cannot be more than 255 characters long")
    .isEmail()
    .withMessage("Email address is not a valid email")
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),

  check('username')
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username")
    .isLength({ min: 6,  max: 50 })
    .withMessage("Username cannot be more than 50 characters long")
    .custom((value) => {
      return db.User.findOne({ where: { username: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Username is already in use by another account');
          }
        });
    }),

  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({min: 8, max: 50 })
    .withMessage('Password must be between 8 and 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g'),

  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({min: 8, max: 50 })
    .withMessage('Password must be between 8 and 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
]

router.post('/register', userValidators, csrfProtection, asyncHandler(async(req,res,next) => {
  const { firstName, lastName, emailAddress, username, password } = req.body;
  const user = db.User.build({ firstName, lastName, emailAddress, username });

  const validationErrors = validationResult(req);

  if (validationErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    // to-do: login user
    res.redirect('/');
  } else {
    const errors = validationErrors.array().map(e => e.msg);
    res.render('user-register', {
      title: 'Register',
      user,
      csrfToken: req.csrfToken(),
      errors
    })
  }
}))


module.exports = router;
