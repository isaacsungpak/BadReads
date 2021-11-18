// const db = require('../../db/models');
// const { requireAuth } = require('../auth');
//fetch to route haandler to communicate w db

console.log('**********')

const starContainer = document.querySelector('.rating');
const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');


fetch('/books/:id/ratings').then(res => res.json())

const stars = document.querySelectorAll('.star').forEach((el) => {
    el.addEventListener('click', e => {
        let rating = e.target.value;
        console.log(rating);
    })
});






