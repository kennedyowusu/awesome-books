/* eslint-disable no-restricted-globals */
export const container = document.querySelector('.container');
export const contact = document.querySelector('#contact');
export const displayContact = document.querySelector('#display_contact');
export const displayBooks = document.querySelector('#display_list');
export const displayForm = document.querySelector('#display_form');
export const date = document.querySelector('.date');
export const bookText = document.getElementById('book-text');

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