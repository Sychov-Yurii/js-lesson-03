// ================= work 1 ================= //

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     tags: ["premium", "promoted", "top"],
//     price: 2153,  
//     public: true,
//     rating: 4,
//   };

// ================= work 02 ================= //

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   }
// };

// ================= work 03 ================= //

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// ================= work 04 ================= //

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];
// // Change code above this line

// ================= work 05 ================= //

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// ================= work 06 ================= //

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola"
// apartment.tags.push("trusted")

// // Change code below this line

// ================= work 07 ================= //

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60; 
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }

// ================= work 08 ================= //

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   // Change code above this line
//   name,
//   price,
//   image,
//   tags,
// };


// ================= work 09 ================= //

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };

// ================= work 10 ================= //

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(key in apartment) {
//   keys.push(key)
//   values.push(apartment[key])
// }

// ================= work 11 ================= //

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }

// ================= work 12 ================= //

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (let name in object) {
//   if (object.hasOwnProperty(name)) {
// propCount += 1    
//   }
// }
//   // Change code above this line
//   return propCount;
// }

// ================= work 13 ================= //

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key])
// }

// ================= work 14 ================= //

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// let keys = Object.keys(object);
//   for (const key of keys) {
//      {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// ================= work 15 ================= //

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// ================= work 16 ================= //

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// for (let name of Object.values(salaries)) {
//   totalSalary += name
// }
//   // Change code above this line
//   return totalSalary;
// }

// ================= work 17 ================= //

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }

// ================= work 18 ================= //

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (let product of products) {
// if (product.name === productName) {
// return product.price
// }  
  
// }

// return null
//   // Change code above this line
// }

// ================= work 19 ================= //

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const newProducts = [];
//   for (let product of products) {
//     if (product[propName]) {
//           newProducts.push(product[propName]);
//     }
    
//   }
// return newProducts
//   // Change code above this line
// }

// ================= work 20 ================= //

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;

//   for (let product of products) {
//     if (product.name === productName) {
//       total += product.price * product.quantity;
//     }
//   }

//   return total;
// }

// ================= work 21 ================= //

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// ================= work 22 ================= //

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// ================= work 23 ================= //

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// ================= work 24 ================= //

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// ================= work 25 ================= //

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}, tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast

// ================= work 26 ================= //

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: {low: todayLow, high: todayHigh,},
//     tomorrow: {low: tomorrowLow, high: tomorrowHigh,}
//   } = forecast;
//   //const todayLow = forecast.today.low;
//   //const todayHigh = forecast.today.high;
//   //const tomorrowLow = forecast.tomorrow.low;
//   //const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ================= work 27 ================= //

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// ================= work 28 ================= //

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// ================= work 29 ================= //

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {
//   ...defaultSettings, ...overrideSettings
// };

// ================= work 30 ================= //

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return {completed, category, priority, ...data}
//   // Change code above this line
// }

// ================= work 31 ================= //

// // Change code below this line
// function add(...args) {
//   // Change code above this line
//   let total = 0;
//   for (let arg of args) {
//     total += arg
//   }
//   return total
// }

// ================= work 32 ================= //

// // Change code below this line
// function addOverNum(max, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > max) {
//       total += arg;
//     }
    
//   }
//   return total;
//   // Change code above this line
// }

// ================= work 33 ================= //

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (const item of args) {
//     if (array.includes(item)) {
//       matches.push(item)
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// ================= work 34 ================= //

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//     removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//     updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
  

//   // Change code above this line
// };

// ================= work 35 ================= //

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const indexToDelete = this.books.indexOf(oldName);
//     this.books.splice(indexToDelete, 1, newName);
//     return this.books
  

//     // Change code above this line
//   },
// };


// ================= work 36 ================= //

// const atTheOldToad = {
//   // Change code below this line
// potions: []
//   // Change code above this line
// };


// ================= work 37 ================= //

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions () {
//   return this.potions
// }

//   // Change code above this line
// };


// ================= work 38 ================= //

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

//   addPotion(potionName) {
  
//   this.potions.push(potionName)
      
//   },
// }

// ================= work 39 ================= //

//  const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// this.potions.splice(this.potions.indexOf(potionName), 1)


//     // Change code above this line
//   },
// };

 // ================= work 40 ================= //

//  const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
    
// const bookIndex = this.potions.indexOf(oldName);
// this.potions.splice(bookIndex, 1, newName)
//   },
// };

  // ================= work 41 ================= //

  // const atTheOldToad = {
  //   potions: [
  //     { name: "Speed potion", price: 460 },
  //     { name: "Dragon breath", price: 780 },
  //     { name: "Stone skin", price: 520 },
  //   ],
  //   // Change code below this line
  //   getPotions() {
  //     return this.potions;
  //   },
  //   addPotion(newPotion) {
  //     for (const potion of this.potions) {
  //     if (potion.name === newPotion.name) {
  //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //     }  
  //     }
  //     this.potions.push(newPotion);
  //   },
  //   removePotion(potionName) {
  //     let potionIndex = -1;
  //     for (const potion of this.potions) {
  //        if (potion.name === potionName) {
  //          potionIndex = this.potions.indexOf(potion)
  //       ;
  //     }
  //     }   
  
  //     this.potions.splice(potionIndex, 1);
  //   },
  //   updatePotionName(oldName, newName) {
  //     let potionIndex = 0;
  //     for (const potion of this.potions) {
  //       if (potion.name === oldName) {
  //         potionIndex = this.potions.indexOf(potion);
  //         potion.name = newName;
  //       }
  //       if (potionIndex === -1) {
  //         return `Potion ${oldName} is not in inventory!`;
  //       }
  //     }
  
  // }
  //   // Change code above this line
  // };

  