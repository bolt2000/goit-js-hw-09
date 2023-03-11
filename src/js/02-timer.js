// Описан в документации
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";


const flat = document.querySelector('#datetime-picker');
const startBtn = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
let counterValue = 0;

flatpickr('#datetime-picker', {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    "minDate": new Date().fp_incr(1)
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};


const timer = {
    constructor() {
        this.intervalId = null;
        this.isActive = false;
    },


    start() {

        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true,
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const timeComponents = getTimeComponents(deltaTime);
            updateClockface(timeComponents);
            console.log(timeComponents);
        }, 1000);
    },
    
    
};


startBtn.addEventListener('click', () => {
    timer.start();
});


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

 function updateClockface({ days, hours, minutes, seconds }) {
        days.textContent = `${ days }`;
        hours.textContent = `${ hours }`;
        minutes.textContent = `${ minutes }`;
        seconds.textContent = `${ seconds }`;
    }




function getTimeComponents(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
