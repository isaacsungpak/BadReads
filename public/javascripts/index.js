

window.addEventListener("load", (event)=>{
    // console.log("hello from javascript!");
    
});

const allNextBtns = document.querySelectorAll('.next-book-btn');
const nextBtn = document.querySelector('.next-book-btn');
allNextBtns[0].addEventListener('click', e => {
    fetchNextBook();
});

allNextBtns[1].addEventListener('click', e => {
    fetchNextBookMiddle();
});

allNextBtns[2].addEventListener('click', e => {
    fetchNextBookEnd();
});

const fetchNextBook = async () => {
    const book1Id = document.querySelector('.random-book-id').innerHTML;
    const book2Id = document.querySelector('.random-book2-id').innerHTML;
    const book3Id = document.querySelector('.random-book3-id').innerHTML;
    fetch('/books/random', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "book1Id": `${book1Id}`,
              "book2Id": `${book2Id}`,
              "book3Id": `${book3Id}`,
              "suggestionNo": "1"
          })
    }).then(res => res.json()).then(books => {
        const currentSuggestion = document.querySelector('.random-book-cover');
        currentSuggestion.src = books.nextRandomBook.coverPhoto
        const currentTitle = document.querySelector('.suggested-book-title');
        currentTitle.innerText = books.nextRandomBook.title;
    });
}

const fetchNextBookMiddle = async () => {
    const book1Id = document.querySelector('.random-book-id').innerHTML;
    const book2Id = document.querySelector('.random-book2-id').innerHTML;
    const book3Id = document.querySelector('.random-book3-id').innerHTML;

    fetch('/books/random', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "book1Id": `${book1Id}`,
              "book2Id": `${book2Id}`,
              "book3Id": `${book3Id}`,
              "suggestionNo": "2"
          })
    }).then(res => res.json()).then(books => {

        let bookIdArr = [book1Id, book2Id, book3Id]; 
        console.log(bookIdArr);
        // console.log(bookIdArr[0].innerText);
        // console.log(bookIdArr[2].innerText);
        console.log(books.nextRandomBook.id);

        const currentSuggestion = document.querySelector('.random-book-cover-mid');
        currentSuggestion.src = books.nextRandomBook.coverPhoto
        const currentTitle = document.querySelector('.suggested-book-title-mid');
        currentTitle.innerText = books.nextRandomBook.title;
        console.log('urldisplay', books.nextRandomBook.coverPhoto);
    });
}

const fetchNextBookEnd = async () => {
    const book1Id = document.querySelector('.random-book-id').innerHTML;
    const book2Id = document.querySelector('.random-book2-id').innerHTML;
    const book3Id = document.querySelector('.random-book3-id').innerHTML;
    fetch('/books/random', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "book1Id": `${book1Id}`,
              "book2Id": `${book2Id}`,
              "book3Id": `${book3Id}`,
              "suggestionNo": "3"
          })
    }).then(res => res.json()).then(books => {
        
        let bookIdArr = [book1Id, book2Id, book3Id]; 
        console.log(bookIdArr);
        console.log('newArr', books.newBookIdArr);
        // console.log(bookIdArr[0].innerText);
        // console.log(bookIdArr[2].innerText);
        console.log(books.nextRandomBook.id);
        const currentSuggestion = document.querySelector('.random-book-cover-end');
        currentSuggestion.src = books.nextRandomBook.coverPhoto
        const currentTitle = document.querySelector('.suggested-book-title-end');
        currentTitle.innerText = books.nextRandomBook.title;
    });
}


