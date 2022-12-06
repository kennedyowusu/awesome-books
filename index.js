/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */

const form = document.querySelector('#form');
const Author = document.querySelector('.Author');
const Title = document.querySelector('.Title');
const bookText = document.getElementById('book-text');
const container = document.querySelector('.container');
const contact = document.querySelector('#contact');
const displayContact = document.querySelector('#display_contact');
const displayBooks = document.querySelector('#display_list');
const displayForm = document.querySelector('#display_form');
const date = document.querySelector('.date');

class Book {
  static validateInputData = (title, author) => {
    if (title.length < 1 || author.length < 1) {
      return false;
    }
    return true;
  }

  save = (title, author) => {
    let books = [];
    if (localStorage.getItem('book') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('book'));
    }
    const book = { text1: title, text2: author };
    books.push(book);
    localStorage.setItem('book', JSON.stringify(books));
  }

  static addBook = (title, author) => {
    const isValidInput = this.validateInputData(title, author);
    if (!isValidInput);
    else {
      const book = new Book(title, author);
      book.save(title, author);
      this.renderBooks();
    }
  }

  static removeBook = (title, author) => {
    let books = [];

    if (localStorage.getItem('book') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('book'));
    }
    books.forEach((book, index) => {
      if (book.text1 === title && book.text2 === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('book', JSON.stringify(books));
    this.renderBooks();
  }

  static renderBooks = () => {
    bookText.innerHTML = '';
    let books = [];
    if (localStorage.getItem('book') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('book'));

      books.forEach((book) => {
        bookText.innerHTML += `
            <div class="wrapper">
              <p class="book-title">${book.text1}</p>
              <p class="book-author">${book.text2}</p>
              <button onclick="deleteBook('${book.text1}', 
              '${book.text2}')">Remove</button>
            </div>
            `;
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', Book.renderBooks());

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBook(Title.value, Author.value);
  Title.value = '';
  Author.value = '';
});

const deleteBook = (text1, text2) => {
  Book.removeBook(text1, text2);
};

contact.innerHTML = `
        <h2> Contact information </h2>

        <ul>
          <li>Email Address: Kennediowusu@gmail.com</li>
          <li>Phone Number: +233546985015</li>
          <li>Street Address: Kwame Nkrumah Downside</li>
        </ul>`;

const showOnlyContact = () => {
  contact.style.display = 'block';
  container.style.display = 'none';
  bookText.style.display = 'none';
};

const showBooksOnly = () => {
  container.style.display = 'none';
  bookText.style.display = 'block';
  contact.style.display = 'none';
  date.style.display = '';
};

const showOnlyForm = () => {
  container.style.display = 'block';
  bookText.style.display = 'none';
  contact.style.display = 'none';
  date.style.display = 'none';
};

function init() {
  if (location.hash === '/#book-list') {
    showBooksOnly();
  } else if (location.hash === '/#form') {
    showOnlyForm();
  } else if (location.hash === '/#contact') {
    showOnlyContact();
  } else {
    showOnlyForm();
  }
}

window.document.addEventListener('DOMContentLoaded', init());
displayContact.addEventListener('click', showOnlyContact);
displayBooks.addEventListener('click', showBooksOnly);
displayForm.addEventListener('click', showOnlyForm);

function showDate() {
  date.innerHTML = `${new Date()}`;
}

setInterval(showDate, 1000);
