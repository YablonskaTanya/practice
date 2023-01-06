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
//     let potionIndex = 0;
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         this.potions.splice(potionIndex, 1, newName);
//       }
//     }
//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
//   // Change code above this line
// };

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  // getPotions() - метод для отримання всього зілля. Повертає значення властивості potions
  getPotions() {
    return this.potions;
  },
  //   addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions,
  // але тільки, якщо такого зілля ще немає в інвентарі.В іншому випадку повертається рядок.

  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    const newProduct = {
      ...newPotion,
    };
    this.potions.push(newPotion);
  },

  // removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.

  removePotion(potionName) {
    for (let i = 0; i < array.lengt; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.slice(i, 1);
      }
    }
  },

  //   updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

  updatePotionName(oldName, newName) {
    for (let i = 0; i < array.length; i += 1) {
      const potion = this.potions[i];
    }

    if (oldName === potion.name) {
      potion.name = newName;
    }
  },
};
