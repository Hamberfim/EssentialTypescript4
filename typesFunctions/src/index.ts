// optional parameters
function calculateTaxA(amount, discount?) {
  // if discount is undefined the logical OR "||" operator will set the value to zero
  return amount * 1.2 - (discount || 0);
}
let taxValueA = calculateTaxA(100);
console.log(`Total Amount: $${taxValueA}`);
let taxValueDiscountA = calculateTaxA(100, 3);
console.log(`Total Amount: $${taxValueDiscountA}`);

// default value for optional parameters
function calculateTaxB(amount, discount = 0) {
  // if no argument is provided for the discount parameter it's default value is set to zero
  return amount * 1.2 - discount;
}
let taxValueB = calculateTaxB(90);
console.log(`Total Amount: $${taxValueB}`);
let taxValueDiscountB = calculateTaxB(90, 2);
console.log(`Total Amount: $${taxValueDiscountB}`);

// rest parameter for multiple values
function calculateTaxC(amount, discount = 0, ...addedFees) {
  return amount * 1.2 - discount + addedFees.reduce((total, val) => total + val, 0);
}
let taxValueC = calculateTaxC(65);
console.log(`Total Amount: $${taxValueC}`);
let taxValueDiscountC = calculateTaxC(65, 2);
console.log(`Total Amount w/discount: $${taxValueDiscountC}`);
let taxValueAddedFeesC = calculateTaxC(65, 2, 12.99, 2.25);
console.log(`Total Amount w/fees: $${taxValueAddedFeesC}`);

// with annotations
function calculateTaxD(amount: number | null, discount: number = 0, ...addedFees: number[]): number {
  if (amount !== null) {
    return amount * 1.2 - discount + addedFees.reduce((total, val) => total + val, 0);
  } else {
    // to handle the noImplicitReturns - making the function explicit about the results it returns
    return -1; // neg num return rather than undefined
  }
}
let taxValueD = calculateTaxD(45.99);
console.log(`Total Amount: $${taxValueC}`);
let taxValueDiscountD = calculateTaxD(45.99, 0.99);
console.log(`Total Amount w/discount: $${taxValueDiscountD}`);
let taxValueAddedFeesD = calculateTaxD(45.99, 0.99, 3.49, 1.99);
console.log(`Total Amount w/fees: $${taxValueAddedFeesD}`);
// implicit return
let taxValueNullD = calculateTaxD(null, 0);
console.log(`Total Amount null: $${taxValueNullD}`);

// void type for functions that do not have a return
function displayValue(label: string, value: number): void {
  console.log(`${label}: ${value}`);
}
displayValue("gas per gal", 3.49);

// type overload of functions by providing multiple typed declarations but only a single implementation
function addConcat(a: number, b: number): number; // declaration
function addConcat(a: string, b: string): string; // declaration
// implementation
function addConcat(a, b) {
  return a + b;
}
const four = addConcat(1, 3);
console.log(four);
const thirteen = addConcat("1", "3");
console.log(thirteen);
const fullName = addConcat("Clark", " Griswold");
console.log(fullName);

// understanding assert functions in typescript
function checkNumber(value: any): asserts value is number {
  if (typeof value != "number") {
    throw new Error("Not a number");
  }
}

function calcSum(a, b) {
  checkNumber(a || b);
  return a * b;
}
console.log(calcSum(3, 3));
// console.log(calcSum("3", 3)); // throws error
