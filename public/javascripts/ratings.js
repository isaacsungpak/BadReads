const starContainer = document.querySelector('.rating');
const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');


window.addEventListener("DOMContentLoaded", () => {
    let url = window.location.pathname;
    const urlParts = url.split('/');
    const bookId = urlParts[2];


    fetch(`/books/${bookId}/ratings`)
        .then(res => res.json())
        .then(res => {
            let val = (res.userRating.value)
            let StarPicked = document.querySelector(`[value="${val}"]`)
            StarPicked.setAttribute("checked", "checked")
        });


    fetch(`/books/${bookId}/ratings`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })


    star1.addEventListener('click', e => {
        fetch(`/books/${bookId}/ratings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: 1 })
        }).then(res => res.json());
    });

    star2.addEventListener('click', e => {
        fetch(`/books/${bookId}/ratings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: 2 })
        })
    });

    star3.addEventListener('click', e => {
        fetch(`/books/${bookId}/ratings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: 3 })
        })
    });

    star4.addEventListener('click', e => {
        fetch(`/books/${bookId}/ratings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: 4 })
        })
    });
    star5.addEventListener('click', e => {
        fetch(`/books/${bookId}/ratings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: 5 })
        })
    });

})








