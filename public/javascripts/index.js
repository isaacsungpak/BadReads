

window.addEventListener("load", (event)=>{
    // console.log("hello from javascript!");
    
});

const nextBtn = document.querySelector('.next-book-btn');
nextBtn.addEventListener('click', e => {
    fetchNextBook();
    //get the random book
//    fetch('/books/random', {
//         method: 'GET',
//     }).then(res => res.json()).then(books => console.log('testing', books));

});

const fetchNextBook = async () => {
    fetch('/books/random', {
        method: 'GET',
    }).then(res => res.json()).then(books => {
        console.log('testing', books)
        const currentSuggestion = document.querySelector('.random-book-cover');
        currentSuggestion.src = books.nextRandomBook.coverPhoto
        const currentTitle = document.querySelector('.suggested-book-title');
        currentTitle.innerText = books.nextRandomBook.title;
        console.log('urldisplay', books.nextRandomBook.coverPhoto);
    });
}
