import { luxon } from './luxon.js';

const displayTime = () => {
  document.getElementById('date-area').innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
  setTimeout(displayTime, 1000);
};
displayTime();

export default displayTime;
