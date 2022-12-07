// import { DateTime } from '../node_modules/luxon/build/global/luxon.min.js';

const fetchDateAndTime = document.querySelector('.date');
setInterval(() => {
  fetchDateAndTime.innerHTML = `${Date().slice(0, 24)}`;
}, 1000);

export default fetchDateAndTime;