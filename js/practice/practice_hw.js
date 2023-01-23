//====== task 1 ========//
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
//==1
// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let total = 0;
// console.log(total);
// for (const item of arrayOfNumbers) {
//   total += item;
// }
// const result = total / arrayOfNumbers.length;
// console.log(Number.parseInt(result));
// console.log(Number.isNaN(result));
//===2
// const caclculateAverage = function () {
//   console.log(arguments);
//   console.log(Number.isNaN(arguments));
//   let total = 0; //45
//   for (const argument of arguments) {
//     total += argument;
//   }
//   console.log(total);
//   const result = total / arguments.length;

//   console.log(result);
//   return result;
// };
// caclculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9);
// //==3
// const caclculateAverage = function () {
//   console.log(arguments);
//   let total = 0; //45
//   for (let index = 0; index < arguments.length; index += 1) {
//     const i = arguments[index];
//     total += i;
//   }
//   console.log(total);
//   const result = total / arguments.length;
//   console.log(result); //0.1111111111
//   console.log(Number.isNaN(arguments));

//   return result;
// };
// caclculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9);
//
//
//====== task 2 ======//
//
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
//=
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   let minNumbers = numbers[0];
//   for (const number of numbers) {
//     if (number < minNumbers) {
//       minNumbers = number;
//     }
//   }
//   console.log(minNumbers);
// }

// console.log(numbers);
// findSmallerNumber(numbers);

//
//====== task 3 ======//

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//   for (let i = 1; i < array.length; i += 1) {
//     console.log(` ${[i]} - ${array[i]}`);
//   }
//   console.log(array);
// }

// logItems(['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']);

//
//====== task 4 ======//
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// // Створіть масив styles з елементами «Джаз» та «Блюз».
// const newArray = ['Джаз', 'Блюз'];
// console.log(newArray);
// //Додайте "Рок-н-рол" в кінець.
// newArray.push('Рок-н-рол');
// console.log(newArray);
// // Замініть значення "Блюз" на "Класика".
// newArray[1] = 'Класика';
// console.log(newArray);
// //Видалить перший елемент масиву і виведіть його в консоль.
// let changeNewArray = newArray.shift();
// console.log(changeNewArray);
// //Вставте «Реп» і «Реггі» на початок масиву.
// newArray.unshift('Реп', 'Реггі');
// console.log(newArray);

//
//====== task 5 ======//
//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

// function findLongestWord(string) {
//   const words = string.split(' ');
//   console.log(words);
//   let longestWord = words[0];
//   console.log(longestWord);
//   //   for (const word of words) {
//   //     if (word.length > longestWord.length) {
//   //       longestWord = word;
//   //     }
//   //   }
//   //   for (let i = 0; i < words.length; i += 1) {
//   //     const element = words[i];
//   //     console.log(element);
//   //     if (element.length > longestWord.length) {
//   //       longestWord = element;
//   //     }
//   //   }
//   console.log(longestWord);
// }
// findLongestWord('Видалить перший елемент масиву виведіть його в консоль');

//
//====== task 6 ======//
//Напишіть функції для роботи з масивом
//add(name) додає курс до кінця колекції
//removeCourse(name) видаляє курс із колекції
//updateCourse(oldName, newName) змінює ім'я на нове
