import { sum } from "./calc";

// function printMessage(msg: string): void {
//   console.log(`Message: ${msg}`);
// }

let printMessage = (msg: string): void => console.log(`Message: ${msg}`);

printMessage("Hello, Typescript!");
printMessage("Hello, Antonio il Cuoco!");
// printMessage(100);

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));

let total = sum(100, 200, 300);
console.log(total);
