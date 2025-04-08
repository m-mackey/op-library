const myLibrary = [
  {title: 'Gilgamesh', author: 'unknown'},
];

function Book(title, author) {
  // the constructor...
  if (!new.target) {
    throw Error("Must use 'new' to call Book constructor");
  }
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  // take params, create a book then store it in the array
  const bookToAdd = new Book(title, author);
  myLibrary.push(bookToAdd);
}

function displayBooks(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (const key in i) {
      return arr[i][key];
    }
  }
}