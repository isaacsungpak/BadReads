const csrf = require('csurf')
const csrfProtection = csrf({cookie: true});
// const db = require('./db/models')

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

// const getRandomBook = async(req, res) => {
//     let randomNum= Math.random();
//     const books = await db.Book.findAll();
//     const randomBookId = Math.round((books.length * randomNum));
//     console.log(randomBookId);

//     const randomBook = await db.Book.findOne({
//     where: {id: randomBookId}
// })
// return randomBook
// }

module.exports = {
    csrfProtection,
    asyncHandler
}
