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

    let newBook = new Book(title.value, author.value, pages.value, isRead.checked);
    addBookToLibrary(newBook);

    // TODO: Turn this into a function to refresh the forms boxes values to empty
    title.value = "";
    author.value = "";
    pages.value = "";
    isRead.checked = false;

    // TODO: Create a function to create a div per book in the array and append it to #books-display

})