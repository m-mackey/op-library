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
}

function addBookToLibrary(title, author) {
  // take params, create a book then store it in the array
  const bookToAdd = new Book(title, author);
  myLibrary.push(bookToAdd);
  displayNewBook(myLibrary.at(-1));
}

const libTableBody = document.querySelector('.lib-table-body');
//might want to rewrite this so that *if* a new book gets added, then it adds just the new book instead of going through the
//entire array again. just like picking the last array entry and tacking it on
//otherwise it will just add the whole list again every time it's called
//this can be used to display what's already in the array onload though
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

function displayNewBook(book){ //will want to rename later probably. this or the other one 
  libTableBody.insertAdjacentHTML(
    'beforeend',
    `<tr>
        <th scope="row">${book.title}</th>
        <td>${book.author}</td>
     </tr>`
  )
}