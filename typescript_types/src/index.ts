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

// === using union types allows the specifying of a set of types ===
// you can only use the properties and methods that are shared by the defined types of the union unless you use a conditional
// number and string types only share on one method "toString()" so a conditional is use to determine one of the two return types
function calcTwoProdPrice(priceA: number, priceB: number, format: boolean): string | number {
  const total = priceA + priceB;
  // returns a type intersect of string | number
  return format ? `$${total.toFixed(2)}` : total;
}
let twoPackFormat = calcTwoProdPrice(2.99, 1.99, true);
let twoPackNoFormat = calcTwoProdPrice(2.99, 1.99, false);
// make the union intersect explicit
let twoPackStr: string | number = calcTwoProdPrice(4.99, 6.99, true);
console.log(twoPackFormat);
console.log(twoPackNoFormat);
console.log(twoPackStr);

// using type assertions - type narrowing
let twoPackAssertNum = calcTwoProdPrice(5.99, 4.99, true) as number; // returned as a string but asserted to number
let twoPackAssertStr = calcTwoProdPrice(12.99, 11.99, false) as string; // returned as a number but asserted to string
// no type conversion is preformed by a type assertion
console.log(`twoPackAssertNum ${typeof twoPackAssertNum}`);
console.log(`twoPackAssertStr ${typeof twoPackAssertStr}`);
