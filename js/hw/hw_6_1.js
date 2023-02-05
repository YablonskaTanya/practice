// const targetBtn = document.querySelector('.js-target-btn');
// console.log(targetBtn);

// const addListnerBtn = document.querySelector('.js-add-listner');
// console.log(addListnerBtn);

// const removeListnerBtn = document.querySelector('.js-remove-listner');
// console.log(removeListnerBtn);

// // targetBtn.addEventListener('click', () => {
// //   console.log('Клік на цільову кнопку');
// // });

// addListnerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('клік на "додати слухача"');
//   targetBtn.addEventListener('click', handleTurgetButtonClick);
// });

// removeListnerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Клік на "зняти слухача"');
//   targetBtn.removeEventListener('click', handleTurgetButtonClick);
// });

// function handleTurgetButtonClick(event) {
//   console.log(event);
//   console.log('Клік на цільову кнопку');
// }

//
//

const formEl = document.querySelector('.js-register-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  console.log(formElements);
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const subscription = formElements.subscription.value;
  console.log(formElements);
  console.log(mail);
  console.log(password);
  console.log(subscription);

  const formData = {
    mail,
    password,
    subscription,
  };

  console.log(formData);
}

//FormData для збору інформації з усієї форми

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log(`${name} - ${value}`);
//   });
// }
//
