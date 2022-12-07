import { DateTime } from '../node_modules/luxon/build/global/luxon.min.js';

const getDateAndTime = () => {
  const dateAndTime = DateTime.now();
  const date = dateAndTime.toLocaleString(DateTime.DATE_MED);
  const time = dateAndTime.toLocaleString(DateTime.TIME_SIMPLE);
  return `${date} ${time}`;
};

export default getDateAndTime;