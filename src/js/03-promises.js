import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('form')
const step = document.querySelector('input[name="step"]');
const delay = document.querySelector('input[name="delay"]');
const amount = document.querySelector('input[name="amount"]');






function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject({ position, delay });
       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
      }, delay);
  });
};





// createPromise(3, 1500, 5)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });




form.addEventListener('submit', (event) => {
  event.preventDefault();

  let delayInput = Number(delay.value);
  let stepInput = Number(step.value);
  let amountInput = Number(amount.value);
 
  
  for(let i = 1; i <= amountInput; i ++) {
    createPromise (i, delayInput)
      .then(({ position, delay }) => {
        Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delayInput += stepInput;
  }
  form.reset();
});








