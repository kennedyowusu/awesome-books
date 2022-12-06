import { DateTime } from 'luxon';

const fetchDateAndTime = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

  return date;
};

export default fetchDateAndTime;