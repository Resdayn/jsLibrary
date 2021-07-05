let myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
})

const addInput = document.querySelector("#add-input");

addInput.addEventListener("click", () => {
  console.log("submit button pressed!");
  let title = document.querySelector('[name="title"]');
  let author = document.querySelector('[name="author"]');
  let pages = document.querySelector('[name="pages"]');
  let isRead = document.querySelector('[name="read"]');

  let newBook = new Book(title.value, author.value, pages.value, isRead.checked);
  addBookToLibrary(newBook);

  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = false;

})