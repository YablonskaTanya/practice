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

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(30, 15));

// if (Math.min(a, b) === NaN) {
//   return false;
// }

// return Math.min(a, b);

// if (Math.min(a, b) === NaN) {
//   return false;
// }

// return Math.min(a, b);

//===
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

//===
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//===
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

//===
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

//===
//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

//===
//Напишіть функції для роботи з масивом
//add(name) додає курс до кінця колекції
//removeCourse(name) видаляє курс із колекції
//updateCourse(oldName, newName) змінює ім'я на нове

// const massage = 'Hello';
// alert(massage);
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);

// const valueA = '5';
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = 'random string';
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   // console.log(`${max} % ${i} = `, max % i);
//   const price = max % i;
//   console.log(`${max} % ${i} = `, price);
//}

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Знайшли число 3, перериваємо виконання циклу');
//     break;
//   }
// }

// console.log('Лог після циклу');

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
//}//
