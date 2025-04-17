const myLibrary = [
  {title: 'Gilgamesh', author: 'unknown', pages: 50},
  {title: 'waiting for godot', author: 'samuel beckett', pages: 100},
  {title: 'tomie', author: 'junji ito', pages: 125},
];

function Book(title, author, pages) {
  // the constructor...
  if (!new.target) {
    throw Error('Must use "new" to call Book constructor');
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
  const bookToAdd = new Book(title, author, pages);
  myLibrary.push(bookToAdd);
  displayNewBook(myLibrary.at(-1));
}

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value);
})


const libTableBody = document.querySelector('.lib-table-body');

function displayBooks(arr) {
  for (let i = 0; i < arr.length; i++) {
    libTableBody.insertAdjacentHTML(
      'beforeend',
      `<tr>
          <th scope="row">${arr[i].title}</th>
          <td>${arr[i].author}</td>
          <td>${arr[i].pages}</td>
       </tr>`
    )
  }
}

//display books already in library on page load
window.onload = () => {
  displayBooks(myLibrary);
}

function displayNewBook(book){ //will want to rename later probably. this or the other one 
  libTableBody.insertAdjacentHTML(
    'beforeend',
    `<tr data-book-id="${book.id}">
        <th scope="row">${book.title}</th>
        <td>${book.author}</td>
        <td>${book.pages}</td>
     </tr>`
  )
}