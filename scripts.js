const myLibrary = [
  {title: 'Gilgamesh', author: 'unknown'},
  {title: 'waiting for godot', author: 'samuel beckett'},
  {title: 'tomie', author: 'junji ito'},
];

function Book(title, author) {
  // the constructor...
  if (!new.target) {
    throw Error('Must use "new" to call Book constructor');
  }
  this.title = title;
  this.author = author;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author) {
  // take params, create a book then store it in the array
  const bookToAdd = new Book(title, author);
  myLibrary.push(bookToAdd);
  displayNewBook(myLibrary.at(-1));
}

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary(bookTitle.value, bookAuthor.value);
})


const libTableBody = document.querySelector('.lib-table-body');

function displayBooks(arr) {
  for (let i = 0; i < arr.length; i++) {
    libTableBody.insertAdjacentHTML(
      'beforeend',
      `<tr>
          <th scope="row">${arr[i].title}</th>
          <td>${arr[i].author}</td>
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
     </tr>`
  )
}