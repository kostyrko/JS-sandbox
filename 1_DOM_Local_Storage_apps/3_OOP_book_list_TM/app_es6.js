class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    // grab tbody
    const list = document.getElementById("book-list");
    // create element
    const row = document.createElement("tr");
    // Insert columns
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }

  showAlert(message, className) {
    // create div
    const div = document.createElement("dic");
    // add class to div
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // insert to dom
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    // disappear after 3 sec.
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}


// Local storage class

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books
  }

  static displayBooks() {
    // get books arr
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI;
      // Add bok to UI
      ui.addBookToList(book)
    });
  }

  static addBook(book) {
    // get books arr
    const books = Store.getBooks();
    // add book to books arr
    books.push(book);
    // save into storage
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){
    // get books arr
    const books = Store.getBooks();

    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM load event listener
document.addEventListener('DOMContentLoaded', Store.displayBooks)


// Event listener for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // when submit create variables with input values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  // Create and instance of Book object
  const book = new Book(title, author, isbn);
  // Create and instance of UI object
  const ui = new UI();
  // Validation of input
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add a book do UI
    ui.addBookToList(book);
    // add to local storage // metoda statyczna więc nie trzeba tworzyć obiektu store
    Store.addBook(book);
    // show everything is ok
    ui.showAlert("Book Added!", "success");
    // clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  // Remove using ISBN as an unique nr
  console.log(e.target.parentElement.previousElementSibling.textContent)
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // Show message
  ui.showAlert("Book removed", "success");
  e.preventDefault();
});
