// In Javascript values of variables have types, the variables themselves do not
let myVar; // myVar variable type is any, the value on the other hand is of type undefined
myVar = 12; // myVar variable type is any, the value on the other hand is of type number
myVar = "Hello"; // myVar variable type is any, the value on the other hand is of type string
myVar = true; // myVar variable type is any, the value on the other hand is of type boolean

// === added "noImplicitAny": true ===

// because no parameter data type is defined it can accept any data type value
// function calculateTax(inputValue) {
//   return inputValue * 1.2;
// }
// console.log(`12 = ${calculateTax(12)}`); // returns expected number value
// console.log(`Hello = ${calculateTax("Hello")}`); // returns Not a Number (NaN)
// console.log(`true = ${calculateTax(true)}`); // true is coerced to the value of 1 and multiplied by 1.2,  return 1.2

// static types are defined by type annotations to the code
// syntax: function function-name(parameter-name: parameter-type-annotation): result/return-type-annotation {}
function calcTax(inputValue: number): number {
  return inputValue * 1.2;
}
// variable annotations
const price: number = 6;
const greet: string = "Hello";
const isTrue: boolean = true;
console.log(`${price} = ${calcTax(price)}`); // returns expected number value
// console.log(`${greet} = ${calcTax(greet)}`); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// console.log(`${isTrue} = ${calcTax(isTrue)}`); // ERROR: Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)

// type can be inferred by the assigned value data type
const productName = "Candy Bar";
const productPrice = 1.99;
const prodInStock = true;
console.log(`productName ${productName} is type of ${typeof productName}`);
console.log(`productPrice ${productPrice} is type of ${typeof productPrice}`);
console.log(`prodInStock ${prodInStock} is type of ${typeof prodInStock}`);

/** Add 'declaration' to the tsconfig.json file to reveal the types that are used
 *  The declaration setting tells the compiler to generate files that contain type information alongside the JavaScript code is produces.
 *  These file are helpful when you get a complier error , especially if you can't see an obvious cause */
