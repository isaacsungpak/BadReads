window.addEventListener("DOMContentLoaded", (e) => {
    const starContainer = document.querySelector('.rating');
    const stars = document.getElementsByClassName('star')
    const rateThisBookText = document.getElementById('rateThisBookText')
    let url = window.location.pathname;
    const urlParts = url.split('/');
    const bookId = urlParts[2];

    fetch(`/books/${bookId}/ratings`)
        .then(res => res.json())
        .then(res => {
            if (res.userId) {
                fetch(`/books/${bookId}/ratings`)
                    .then(res => res.json())
                    .then(res => {
                        rateThisBookText.innerText = "Your rating"
                        let val = (res.userRating.value)
                        let StarPicked = document.querySelector(`[value="${val}"]`)
                        StarPicked.setAttribute("checked", "checked")})
                    .catch(err => rateThisBookText.innerText = "Rate this book")

                const addStart = (e) => {
                    if (e.target.value) {
                        let value = e.target.value
                        fetch(`/books/${bookId}/ratings`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ value: value })
                        }).then(res => res.json())
                    }
                }
                starContainer.addEventListener("click", addStart)
            }
            else {
                Array.from(stars).forEach(star => {
                    star.setAttribute("disabled", "true")
                });
            }
        })

})