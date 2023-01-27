//*/
/*
    ## Example 5 - Метод filter
    Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
    збігається зі значенням параметра `type`.
    const getCarsWithType = (cars, type) => {};
    console.table(getCarsWithType(cars, 'suv'));
    console.table(getCarsWithType(cars, 'sedan'));
*/

/*
    ## Example 8 - Метод sort
    Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
    відсортований за зменшенням значення властивості `price`.
    const sortByDescendingPrice = cars => {};
    console.table(sortByDescendingPrice(cars));
*/
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
