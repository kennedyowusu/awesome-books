/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */

import {
  bookText,
} from './modules/logic.js';

const form = document.querySelector('#form');
const Author = document.querySelector('.Author');
const Title = document.querySelector('.Title');

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

window.deleteBook = (text1, text2) => {
  Book.removeBook(text1, text2);
};