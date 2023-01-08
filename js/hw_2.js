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

// ✅ Працює виклик після оголошення

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

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (value of values) {
//   values.push(apartment[value]);
// }

// console.log(values);
// console.log(keys);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(values);
// console.log(keys);

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// // let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   console.log(colors);

//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   // Change code above this line
// }

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//
//

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// console.log(accessType);
// console.log(message);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const keys = Object.values(products);

//   for (const key of keys) {
//     propName.push(key);

//     return propName;
//   }
//   return [];
// }

//Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
//Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products і повертає його ціну(властивість price).
//Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   // Change code below this line
//   for (const product of products)
//     if (product.name === productName) return product.price;
//   return null;

//   // Change code above this line
// }

//Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   // Change code above this line
// }
// console.log(...products);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = Object.keys(propName);
//   console.log(values);
//   // Change code above this line
//   console.log(propName);
// }
// console.log(products);

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line

//     this.potions.splice(0, this.potions.length - 1);
//     console.log(atTheOldToad.potions);

//     console.log(removePotion);
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad);

// this.potions.splice(0, this.potions.length - 1);

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//     return this.potions;
//   },
//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// Виносимо варіанти в масив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

//
