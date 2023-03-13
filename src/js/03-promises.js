import { Notify } from 'notiflix/build/notiflix-notify-aio';



const position = document.querySelector('input[name="step"]');
const delay = document.querySelector('input[name="delay"]');
const amount = document.querySelector('input[name="amount"]');


function createPromise(position, delay) {

  // const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject({ position, delay });
         Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      }

      }, delay);
  });
};





createPromise(3, 1500, 5)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    // Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    // Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });













