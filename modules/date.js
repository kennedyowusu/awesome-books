// import { DateTime } from '../node_modules/luxon/build/global/luxon.min.js';

// const getDateAndTime = () => {
//   const date = DateTime.now().toLocaleString(DateTime.DATE_MED);
//   const time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);
//   return `${date} ${time}`;
// };

// export default getDateAndTime;

const fetchDateAndTime = document.querySelector('.date');
setInterval(() => {
  fetchDateAndTime.innerHTML = `${Date().slice(0, 24)}`;
}, 1000);

export default fetchDateAndTime;