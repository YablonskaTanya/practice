// // 1
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// // 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';

//   // Change code above this line
// }

// // 3
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';

//   // Change code above this line
// }

// // 4
// // Change code below this line
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // 5
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line
// const firstElement = 'apple';
// const secondElement = 'plum';
// const lastElement = 'orange';

// // 6
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// // Write your code under this line

// // 7
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;
// // Change code below this line

// // 8
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // 9
// function getExtremeElements(array) {
//   // Change code below this line

//   return [array[0], array[array.length - 1]];
//   // Change code above this line
// }

// // 10
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);

//   // Change code above this line
//   return words;
// }

// // 11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   let words = message.split(' ');
//   return words.length * pricePerWord;

//   // Change code above this line
// }

// // 12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
//}

// // 13
// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(' ').join('-');

//   return slug;
//   // Change code above this line
// }

// // 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// // 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// // 16
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change the code below this line
//   maxLength = firstArray.concat(secondArray).slice(0, maxLength);

//   return maxLength;
//   // Change code above this line
//}
// 17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  // Change this line
  console.log(i);
}

// 18
function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }

  return sum;
  // Change code above this line
}

// 19
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
// 20
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
  return total;
}

// 21
function findLongestWord(string) {
  // Change code below this line

  const longestWord = string.split(' ').sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];

  // Change code above this line
}
// 22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  for (let i = min; i <= max; i += 1) numbers.push(i);

  // Change code above this line
  return numbers;
}

// 23
function filterArray(numbers, value) {
  // Change code below this line
  const newArray = [];
  for (let i = 0; numbers.length > i; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;

  // Change code above this line
}

// 24
function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  return fruits.includes(fruit);
  return; // Change this line
}

// 25
function getCommonElements(array1, array2) {
  // Change code below this line

  let result = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;

  // Change code above this line
}

// 26
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const ord of order) {
    total += ord;
  }

  // Change code above this line
  return total;
}

// 27
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

// 28
// 28
// 30
// 31
// 32
