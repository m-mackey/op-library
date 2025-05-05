const myLibrary = [
  {title: 'Gilgamesh', author: 'unknown', pages: 50},
  {title: 'waiting for godot', author: 'samuel beckett', pages: 100},
  {title: 'tomie', author: 'junji ito', pages: 125},
];

function Book(title, author, pages, status) {
  // the constructor...
  if (!new.target) {
    throw Error('Must use "new" to call Book constructor');
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, status) {
  // take params, create a book then store it in the array
  myLibrary.push(new Book(title, author, pages, status));
  displayNewBook(myLibrary.at(-1));
}



const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const readStatus = form.elements["read-status"];
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, readStatus.value);
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
        <td><button class="read-status-btn">${book.status}</button></td>
        <td><button class="remove-btn" data-book-id="${book.id}">Remove</button></td>
     </tr>`
  )
}

// Book.prototype.toggleReadStatus = function () {
//   console.log('worked'); 
// }

libTableBody.addEventListener('click', removeBook); 
libTableBody.addEventListener('click', toggleReadStatus); 

function toggleReadStatus(e){  //event delegation? < add to 'what i learned'
  if (e.target.classList.contains('read-status-btn')) { //might be better to target btn first then class?
    console.log('read status button');
    //call prototype fn here
  } 
}

function removeBook(e) {
  if(e.target.classList.contains('remove-btn')) {
    //remove book from display
    const targetBookId = e.target.dataset.bookId;
    const targetBookRow = document.querySelector(`tr[data-book-id='${targetBookId}']`);
    targetBookRow.remove();
    //remove book from library array
    myLibrary.splice(myLibrary.indexOf(myLibrary.find((book) => book.id === targetBookId)), 1);
  }
}