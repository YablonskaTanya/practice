//*/
//## Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
/*
    ## Example 5 - Метод filter
    Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
    збігається зі значенням параметра `type`.
    const getCarsWithType = (cars, type) => {};
    console.table(getCarsWithType(cars, 'suv'));
    console.table(getCarsWithType(cars, 'sedan'));
*/

// const getCarsWithType = (cars, type) => {
//   const result = cars.filter(car => {
//     return car.type === type;
//   });
//   return result;
// };
// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
/*
    ## Example 8 - Метод sort
    Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
    відсортований за зменшенням значення властивості `price`.
    const sortByDescendingPrice = cars => {};
    console.table(sortByDescendingPrice(cars));
*/
// const sortByDescendingPrice = cars => {
//   const result = cars.sort((a, b) => b.price - a.price);

//   return result;
// };
// console.table(sortByDescendingPrice(cars));
/*
    ## Example 9 - Метод sort
    Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
    за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
    значення параметра `order`.
    const sortByModel = (cars, order) => {};
    console.table(sortByModel(cars, 'asc'));
    console.table(sortByModel(cars, 'desc'));
*/

/*
    ## Example 10 - Метод reduce
    Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
    властивостей `amount`).
    const getTotalAmount = cars => {};
    console.log(getTotalAmount(cars));
*/

//v1
// const getTotalAmount = (cars) => {
//   const result = cars.reduce((acc, car) => {
//     acc += car.amount;
//     return acc;
//   }, 0);

//   return result;
// };

//v2 // все те що повертається з коллбеку - записується в acc
// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

//calсulateAverage
// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach((candiBober) => {
//     total += candiBober;
//   });

//   return total / args.length;
// };

//v1
// const calсulateAverage = (...args) => {
//   // let total = 0;

//   // args.forEach((candiBober) => {
//   //   total += candiBober;
//   // });

//   const total = args.reduce((acc, number) => {
//     acc += number;
//     return acc;
//   }, 0);

//   return total / args.length;
// };

//v2
// const calсulateAverage = (...args) =>
//   args.reduce((acc, number) => acc + number, 0) / args.length;

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5

/* reduce який повертає об'єкт */

// const result = cars.reduce(
//   (acc, car) => {
//     acc.totalAmount += car.amount;
//     acc.totalPrice += car.price;
//     return acc;
//   },
//   {totalAmount: 0, totalPrice: 0},
// ); //{totalAmount, totalPrice}

// console.log(result);

/* reduce який повертає строку */
// const result = cars.reduce((acc, car) => {
//   acc += `_${car.model}`;

//   return acc;
// }, ''); //{totalAmount, totalPrice}

// console.log(result);
