// // const max = 10;
// // for (let i = 0; i < max; i += 1) {
// //   console.log(`${max} % ${i} = `, max % i);
// // }

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// // Виносимо варіанти в масив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// // ✅ Працює виклик до оголошення
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// function getExtremeElements(array) {
//   //   // Change code below this line
//   const array = [1, 2, 3, 4, 5];

//   array = [0, array.length - 1];

//   //   // Change code above this line
// }

//let array = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);
//   array.slice(0, array.length - 1);
//   console.log(array[i]);
// }

// let index = [1, 2, 4, 5];
// console.log([0][index.length - 1]);

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let words = message.split(' ');
//   return words.length * pricePerWord;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLoverCase().split(' ').join('-');

//   return slug;
//   // Change code above this line
// }

// for (const iterator of object) {
// }

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }gi
