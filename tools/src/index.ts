import { calcSum } from "./calc";

// function printMessage(msg: string): void {
//   console.log(`Message: ${msg}`);
// }

const printMessage = (msg: string): void => console.log(`Message: ${msg}`);

printMessage("Hello, Typescript!");
printMessage("Hello, Antonio il Cuoco!");
// printMessage(100);

const data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));

debugger; // eslint-disable-line no-debugger

const total = calcSum(100, 200, 300);
console.log(`total: ${total}`);
