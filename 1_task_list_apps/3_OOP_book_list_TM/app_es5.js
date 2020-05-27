// Book Constructor -> Object
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// User Interface Constructor -> Actions
function UI() {}

UI.prototype.addBookToList = function(book){
  // grab tbody
  const list  = document.getElementById('book-list');
  // create element
  const row = document.createElement('tr');
  // Insert columns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row)
}

// Clear Fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement('dic');
  // add class to div
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // insert to dom
  const container = document.querySelector('.container');
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);

  // disappear after 3 sec.
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000);
}

document.getElementById('book-form').addEventListener('submit', function(e){
  // when submit create variables with input values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Create and instance of Book object
  const book = new Book(title, author, isbn);

  // Create and instance of UI object
  const ui = new UI();

  // Validation of input
  if(title === "" || author === "" || isbn === "") {
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add a book do UI
    ui.addBookToList(book);

    // show everything is ok
    ui.showAlert('Book Added!', 'success');

    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
})