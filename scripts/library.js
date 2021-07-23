// Array containing the individual book objects
let myLibrary = [];

function Book(title, author, pages, isRead) {
  // Constructor for the a book object
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead
}

function addBookToLibrary(book) {
  // Adds a book to the library array
  myLibrary.push(book);
}

// Prevents the default form behavior
const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
})

// Adds an event listener to the "Add a book" button in the form.
// It collects the info from the form and add them as parameters for the book constructor.
const addInput = document.querySelector("#add-input");
addInput.addEventListener("click", () => {
    console.log("submit button pressed!");
    let title = document.querySelector('[name="title"]');
    let author = document.querySelector('[name="author"]');
    let pages = document.querySelector('[name="pages"]');
    let isRead = document.querySelector('[name="read"]');

    if (title.value == '' || author.value == '' || pages.value == ''){
      return alert('You need to fill all the sections in order to add a book!');
    }

    let newBook = new Book(title.value, author.value, pages.value, isRead.checked);
    addBookToLibrary(newBook);

    // TODO: Turn this into a function to refresh the forms boxes values to empty
    title.value = "";
    author.value = "";
    pages.value = "";
    isRead.checked = false;

    // Removes all the html book cards and runs addBookToDisplay
    let bookDisplay = document.querySelector('#books-display');
    while (bookDisplay.firstChild){
      bookDisplay.removeChild(bookDisplay.firstChild)
    }
    myLibrary.forEach((book, index) => addBookToDisplay(book, index));

})

function addBookToDisplay(book, index){
  // Takes a book object, creates a div with its details, applies a css class and appends it to the #book-display container
  const bookDiv = document.createElement('div');

  // Adds the book div to the DOM and applies the CSS style
  document.getElementById('books-display').appendChild(bookDiv);
  bookDiv.classList.add("book");

  // Adds the data-attribute with the index value in the library array
  bookDiv.dataset.bookIndex = index;

  // Adds the 4 divs for each of the book properties
  let bookTitle = document.createElement('div');
  bookTitle.id = "book-title";
  bookTitle.innerText = book.title
  bookTitle.style.fontSize = '3em';
  bookDiv.append(bookTitle);
  
  let bookAuthor = document.createElement('div');
  bookAuthor.id = "book-author";
  bookAuthor.innerText = book.author;
  bookAuthor.style.fontSize = '2em';
  bookDiv.append(bookAuthor);

  let bookPages = document.createElement('div');
  bookPages.id = "book-pages";
  bookPages.innerText = `${book.pages} pages`;
  bookPages.style.fontSize = '2em';
  bookDiv.append(bookAuthor);  

  let bookIsread = document.createElement('div');
  bookIsread.id = "book-Isread";
  if (book.isRead == false){
    bookIsread.innerText = 'Not Read';
  } else {bookIsread.innerText = 'Finished';}
  
  bookIsread.style.fontSize = '2em';
  bookDiv.append(bookIsread);

  // Adds the button to change the read value
  let changeReadStatus = document.createElement('button');
  changeReadStatus.id = 'change-read';
  changeReadStatus.classList.add('read-change-button')
  bookDiv.append(changeReadStatus)

  if (bookIsread.innerText = 'Not Read'){
    changeReadStatus.innerText = 'Finished';
  } else if (bookIsread.innerText = 'Finished'){
    changeReadStatus.innerText = 'Not Read';
  }
  
  changeReadStatus.addEventListener('click', (e) => {
    // Changes the read status in the html and changes the read value of the book object in the array
    if (book.isRead == false){
      e.target.parentElement.children[2].innerText = 'Finished';
      myLibrary[index].isRead = true;
      changeReadStatus.innerText = 'Not Read';
    } else {
      e.target.parentElement.children[2].innerText = 'Not Read';
      myLibrary[index].isRead = false;
      changeReadStatus.innerText = 'Finished';
    }
  });

  // Adds the button to remove the book
  let removeBookButton = document.createElement('button');
  removeBookButton.id = 'remove-button';
  removeBookButton.innerText = 'Remove';
  removeBookButton.classList.add('remove-button');
  bookDiv.append(removeBookButton);
  removeBookButton.addEventListener('click', (e) => {
    console.log(`The index of this book is ${e.target.parentElement.dataset.bookIndex}`);
    delete myLibrary[e.target.parentElement.dataset.bookIndex];
    let bookDisplay = document.querySelector('#books-display');
    while (bookDisplay.firstChild){
      bookDisplay.removeChild(bookDisplay.firstChild)
    }
    myLibrary.forEach((book, index) => addBookToDisplay(book, index));
  });

}