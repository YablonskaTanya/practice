//==============================================================================
//1// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 10;
// if (a === 10) {
//   console.log("'Вірно'");
// } else {
//   console.log("'Невірно'");
// }

// const a = 10;
// const result = a === 10 ? 'Вірно' : 'Невірно';
// console.log(result);

//2 Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// let num = 5;
// let resalt = '';
// switch (num) {
//   case 1:
//     resalt = 'winter';
//     break;
//   case 2:
//     resalt = 'spring';
//     break;
//   case 3:
//     resalt = 'summer';
//     break;
//   case 4:
//     resalt = 'autumn';
//     break;
//   default:
//     resalt = 'Plase enter from 1 to 4';
// }

// console.log(resalt);

//3 Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

// Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const fn = function () {
//   const login = prompt('Login?');
//   if (login === 'Адмін') {
//     const passsword = prompt('Password?');
//     if (passsword === 'Я головний') {
//       console.log('Добрий день!');
//     } else {
//       console.log('Невірний пароль!');
//     }
//   } else if (!login) {
//     console.log('Скасовано');
//   } else {
//     console.log('Я вас не знаю');
//   }
// };
// fn();

//4
//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа

// console.log(Number.isNaN(min));
// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(30, 15));

// if (Math.min(a, b) === NaN) {
//   return false;
// }

// return Math.min(a, b);

// if (Math.min(a, b) === NaN) {
//   return false;
// }

// return Math.min(a, b);
