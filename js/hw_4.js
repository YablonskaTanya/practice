// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(10);

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// console.log(classicAdd(5, 10, 15));

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// console.log(classicAdd(5, 10, 15));

// const add = (a, b, c) => {
//   return a + b + c;
// };
// console.log(add(1, 1, 1));

// const add = a => {
//   return a + 5;
// };

// console.log(add(10));

// const greet = () => {
//   console.log('Привіт!');
// };
// console.log(greet());

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(5, 10, 15));

// const add = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return;
// }

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return `There is no pizza with a name ${pizzaName} in the assortment.`;
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   // Change code below this line

//   numbers.forEach(function (number, index) {
//     console.log(`Індекс ${index}, значення ${number}`);
//   });

//   filterArray.forEach(function (number, i) {
//     filteredNumbers.push(numbers[i] > value);
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// length;

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet =>
//   planets.length

//   console.log(planet);
//   console.log(index);
//   console.log(planets);
// );

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
