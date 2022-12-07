/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */

import {
  container, contact, displayContact, displayBooks, displayForm, date, bookText,
} from './modules/data.js';

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