"use strict";
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootPrice = "100";
console.log(`Boot price: ${bootPrice}`);
// Javascript coercion sees them both as strings
console.log(`Total price: ${hatPrice + bootPrice}`);

console.log("\n=== Abstract comparison ===");
// Javascript coercion sees them both as numbers
if (hatPrice == bootPrice) {
  console.log("Prices are the same.");
} else {
  console.log("Prices are different");
}

console.log("\n=== Strict comparison ===");
// Javascript look at the data type and there equality
if (hatPrice === bootPrice) {
  console.log("Prices are the same.");
} else {
  console.log("Prices are different");
}

// explicit type coercion
console.log(`\nTotal price: ${Number(hatPrice) + Number(bootPrice)}\n`);
let firstCity;
// if first city has a value is will be converted to true and retain its assigned value
// else it will be converted to false and be assigned the value on the other side of logical operator value
let secondCity = firstCity || "Tucson";
console.log(`City: ${secondCity}\n`);

let taxRate; // no value is defined
console.log(`Tax rate: ${taxRate || 10}%`);
taxRate = 0; // zero and an empty string coerce to false
console.log(`Tax rate: ${taxRate || 10}%`); // so zero can not be assigned
taxRate = ""; // zero and an empty string coerce to false
console.log(`Tax rate: ${taxRate || 10}%`);
taxRate = 12;
console.log(`Tax rate: ${taxRate || 10}%\n`);

// nullish coalescing
taxRate = 0; // zero and an empty string coerce to false
console.log(`Tax rate: ${taxRate ?? 10}%`); // zero can be assigned with the nullish coalescing operator ??

// functions
function sumPrices(a, b, c) {
  // a number is the expected return but the parameter arguments can determine the datatype of the return
  return a + b + c;
}
let totalPrice = sumPrices(hatPrice, bootPrice);
console.log(`${totalPrice} is a ${typeof totalPrice}`); // ends up being a concatenated string rather than a numerical sum
totalPrice = sumPrices(100, 200, 300);
console.log(`${totalPrice} is a ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200); // the 3rd undefined parament argument coalesces a NaN (not a number value)
console.log(`${totalPrice} is a ${typeof totalPrice}`);

function addPrices(a, b, c = 0) {
  // a number is the expected return but the parameter arguments can determine the datatype of the return
  return a + b + c;
}
totalPrice = addPrices(10, 20);
console.log(`${totalPrice} is a ${typeof totalPrice}`);

// rest parameter
// function additionSum(...numbers) {
//   return numbers.reduce(function (total, value) {
//     // validate parameters
//     return total + (Number.isNaN(Number(value)) ? 0 : Number(value));
//   }, 0);
// }

// arrow function
// function additionSum(...numbers) {
//   return numbers.reduce((total, value) => {
//     // validate parameters
//     return total + (Number.isNaN(Number(value)) ? 0 : Number(value));
//   }, 0);
// }
let myTotal = (...numbers) => numbers.reduce((total, value) => total + (Number.isNaN(Number(value)) ? 0 : Number(value)));
totalPrice = myTotal(15, 25, 35, 55, "pizza", undefined, false);
console.log(`${totalPrice} is a ${typeof totalPrice}\n`);

// arrays
let mixedDataArr = ["Tim", 34.44];
mixedDataArr.push(false);
console.log(mixedDataArr);

let products = ["Glove", "Boots", "Hat"];
let prices = [25.99, 100.0, 75.0];
// spread operator
let prodPriceArr = [...products, ...prices];
console.log(prodPriceArr);
prodPriceArr.forEach((element, idx) => console.log(`index: ${idx}, value: ${element}`));

// destructuring
let [item1, item2, item3, price1, price2, price3] = prodPriceArr;
console.log(`${item1} is $${price1}. ${item2} is $${price2}. ${item3} is $${price3}.`);
// ignore items -destructuring
let [, , i3, , , p3] = prodPriceArr;
console.log(`${i3} is $${p3.toFixed(2)}.`);

// sort and assign to a new array
let numbers = [100.25, 100.22, 100.24, 100.02, 100.21, 100.05];
let [, ...highest] = numbers.sort((a, b) => a - b);
highest.forEach((numbers, idx) => console.log(`${idx} # ${numbers}`));
