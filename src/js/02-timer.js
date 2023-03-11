// Описан в документации
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const flat = document.querySelector('#datetime-picker');
const startBtn = document.querySelector("[data-start]");
const _days = document.querySelector("[data-days]");
const _hours = document.querySelector("[data-hours]");
const _minutes = document.querySelector("[data-minutes]");
const _seconds = document.querySelector("[data-seconds]");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // "minDate": new Date().fp_incr(1),
  onClose (selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.warning('Вибрана не пеправильна дата');
      startBtn.disabled = true;
      return;
    } else {
      startBtn.disabled = false;
      console.log(selectedDates[0]);
    }
  },
};

flatpickr(flat, options);

startBtn.addEventListener('click', () => {
    timer.start();
});

const timer = {
  intervalId: null,
  // isActive: false,

    start() {

      const currentTime = new Date(flat.value);
      flat.disabled = true;
      startBtn.disabled = true;
        
          this.intervalId = setInterval(() => {
            const startTime = new Date();
            const deltaTime = currentTime - startTime;
      if (deltaTime <= 0) {
      this.intervalId = clearInterval(this.intervalId);
      return;
    }
    const Timer = convertMs(deltaTime);
    updateClockface(Timer);
            console.log(Timer);
        }, 1000);
    }
  }

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
  
  _days.innerHTML = days;
  _hours.innerHTML = hours;
  _minutes.innerHTML = minutes;
  _seconds.innerHTML  = seconds;
    }


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}







// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const input = document.getElementById('datetime-picker');
// const btnStart = document.querySelector('button[data-start]');

// //  selectedDates[0]

// const componentTimer = {
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     // почему невыбираеться this
//     if (selectedDates[0] < new Date()) {
//       Notify.warning('Please choose a date in the future');
//       return;
//     }
//     // btnStart.disabled = false;
//   },
// };

// const timer = {
//   intervalId: null,
//   start() {
//     const selectedtime = new Date(flat.value);
// // input.disabled = true;
//     this.intervalId = setInterval(() => {
      
//       const currentTime = new Date();
//       const deltaTime = selectedtime - currentTime;
//       if (deltaTime <= 0) {
//         this.stop();
//         return;
//       }

//       const componentTimer = convertMs(deltaTime);
//       console.log(componentTimer);
//       updateTimeFace(componentTimer);
//       // updateWords(componentTimer)
//       // btnStart.disabled = true;
//     }, 1000);
//   },

//   stop() {
//     this.intervalId = clearInterval(this.intervalId);
//   },
// };
// flatpickr(flat, options);

// // btnStart.disabled = true;
// startBtn.addEventListener('click', () => timer.start());

// function updateTimeFace({ days, hours, minutes, seconds }) {
//   days.textContent = days;
//   hours.textContent = hours;
//   minutes.textContent = minutes;
//   seconds.textContent = seconds;
// }



// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }
// function addLeadingZero(value) {
//   return String(value).padStart(2, 0);
// }

