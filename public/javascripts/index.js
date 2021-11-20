

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
    const book1Id = document.querySelector('.random-book-id');
    const book2Id = document.querySelector('.random-book2-id');
    const book3Id = document.querySelector('.random-book3-id');
    fetch('/books/random', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "book1Id": `${book1Id.innerHTML}`,
            "book2Id": `${book2Id.innerHTML}`,
            "book3Id": `${book3Id.innerHTML}`,
            "suggestionNo": "1"
        })
    }).then(res => res.json()).then(books => {
        let bookIdArr = [book1Id.innerHTML, book2Id.innerHTML, book3Id.innerHTML]; 
        book1Id.innerText = books.newBookIdArr[0]; 
        bookIdArr = books.newBookIdArr;
        const currentLink = document.querySelector('.random-book');
        currentLink.href = '/books/' + books.theNextRandomBook.id;
        const currentSuggestion = document.querySelector('.random-book-cover');
        currentSuggestion.src = books.theNextRandomBook.coverPhoto
        const currentTitle = document.querySelector('.suggested-book-title');
        currentTitle.innerText = books.theNextRandomBook.title;
    });
}

const fetchNextBookMiddle = async () => {
    const book1Id = document.querySelector('.random-book-id');
    const book2Id = document.querySelector('.random-book2-id'); 
    const book3Id = document.querySelector('.random-book3-id');

    fetch('/books/random', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "book1Id": `${book1Id.innerHTML}`,
              "book2Id": `${book2Id.innerHTML}`,
              "book3Id": `${book3Id.innerHTML}`,
              "suggestionNo": "2"
          })
    }).then(res => res.json()).then(books => {

        let bookIdArr = [book1Id.innerHTML, book2Id.innerHTML, book3Id.innerHTML]; 
        console.log(bookIdArr);
        console.log(books)
        // console.log(books.thetheNextRandomBook);
        // console.log(books.newBookIdArr)
        book2Id.innerText = books.newBookIdArr[1];
        bookIdArr = books.newBookIdArr;

        const currentLink = document.querySelector('.random-book-2');
        currentLink.href = '/books/' + books.theNextRandomBook.id;
        const currentSuggestion = document.querySelector('.random-book-cover-mid');
        currentSuggestion.src = books.theNextRandomBook.coverPhoto
        const currentTitle = document.querySelector('.suggested-book-title-mid');
        currentTitle.innerText = books.theNextRandomBook.title;
    });
}

const fetchNextBookEnd = async () => {
    const book1Id = document.querySelector('.random-book-id');
    const book2Id = document.querySelector('.random-book2-id');
    const book3Id = document.querySelector('.random-book3-id');
    fetch('/books/random', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "book1Id": `${book1Id.innerHTML}`,
              "book2Id": `${book2Id.innerHTML}`,
              "book3Id": `${book3Id.innerHTML}`,
              "suggestionNo": "3"
          })
    }).then(res => res.json()).then(books => {
        
        let bookIdArr = [book1Id.innerHTML, book2Id.innerHTML, book3Id.innerHTML]; 
        book3Id.innerText = books.newBookIdArr[2];
        bookIdArr = books.newBookIdArr;
        const currentLink = document.querySelector('.random-book-3');
        currentLink.href = '/books/' + books.theNextRandomBook.id;
        const currentSuggestion = document.querySelector('.random-book-cover-end');
        currentSuggestion.src = books.theNextRandomBook.coverPhoto
        const currentTitle = document.querySelector('.suggested-book-title-end');
        currentTitle.innerText = books.theNextRandomBook.title;
    });
}


