const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minsElem = document.getElementById("minutes");
const secElem = document.getElementById("seconds");

const newDate = "1 Jan 2021";

function countdown() {
  const newYearDate = new Date(newDate);
  const currentDate = new Date();

  const totalseconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);

  const hours = Math.floor(totalseconds / 3600) % 24;

  const minutes = Math.floor(totalseconds / 60) % 24;

  const seconds = Math.floor(totalseconds) % 60;

  daysElem.innerHTML = days;
  hoursElem.innerHTML = formatTime(hours);
  minsElem.innerHTML = formatTime(minutes);
  secElem.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

countdown();

setInterval(countdown, 1000);
