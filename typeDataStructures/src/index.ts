function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hatPrice = 100;
let glovesPrice = 75;
let umbrellaPrice = 42;

writePrice("Hat", calculateTax(hatPrice));
writePrice("Gloves", calculateTax(glovesPrice));
writePrice("Umbrella", calculateTax(umbrellaPrice));

console.log("\n=== Parallel typed Arrays ===");
// an empty array will inferred the 'any[]' type
let emptyArray = [];
let prices: number[] = [100, 75, 42]; // type annotation : number[] or inferred
let names = ["Hat", "Gloves", "Umbrella"]; // type annotation : string[] or inferred

writePrice(names[0], calculateTax(prices[0]));
writePrice(names[1], calculateTax(prices[1]));
writePrice(names[2], calculateTax(prices[2]));

console.log("\n=== Loop thru Arrays ===");
prices.forEach((prices: number, index: number) => {
  writePrice(names[index], calculateTax(prices));
});

console.log("\n=== Tuples ===");
let hatTuple: [string, number] = ["Hat", 100];
let glovesTuple: [string, number] = ["Gloves", 75];
let umbrellaTuple: [string, number] = ["Umbrella", 42];
writePrice(hatTuple[0], hatTuple[1]);
writePrice(glovesTuple[0], glovesTuple[1]);
writePrice(umbrellaTuple[0], umbrellaTuple[1]);

console.log("\n=== Process Tuples ===");
hatTuple.forEach((h: string | number) => {
  if (typeof h == "string") {
    console.log(`String: ${h}`);
  } else {
    console.log(`Number: ${h.toFixed(2)}`);
  }
});

// Process via destructuring
let [hatName, hatCost] = hatTuple;
console.log(`Name: ${hatName}, costs: ${hatCost}`);

console.log("\n=== Using Tuples Types ===");
// using Tuples
let products: [string, number][] = [
  ["Hat", 100],
  ["Gloves", 75],
  ["Umbrella", 42],
];
let tupleUnion: ([string, number] | boolean)[] = [true, false, ...products];

tupleUnion.forEach((element: [string, number] | boolean) => {
  // instanceof Array used to test/guard for a tuple - a tuple is a kind of array, 'typeof' doesn't work on arrays
  if (element instanceof Array) {
    let [str, num] = element;
    console.log(`Name: ${str}, Price: ${num.toFixed(2)}`);
  } else if (typeof element === "boolean") {
    console.log(`Boolean value: ${element}`);
  }
});

console.log("\n=== Optional Tuples Types ===");
// optional tuples
let shoes: [string, number, number?] = ["Shoes", 100];
let socks: [string, number, number?] = ["Socks", 25, 10];
let belt: [string, number, number?] = ["Belt", 75, 20];

// destructured processing loop
[shoes, socks, belt].forEach((tuple) => {
  let [name, price, taxRate] = tuple;
  if (taxRate != undefined) {
    price += price * (taxRate / 100);
  }
  writePrice(name, price);
});

console.log("\n=== ENUM Types ===");
enum Product {
  Hat,
  Gloves,
  Umbrella,
}

const productEnum: [Product, number][] = [
  [Product.Hat, 85],
  [Product.Gloves, 65],
  [Product.Umbrella, 44],
];

productEnum.forEach((prod: [Product, number]) => {
  switch (prod[0]) {
    case Product.Hat:
      writePrice("Hat", calculateTax(prod[1]));
      break;
    case Product.Gloves:
      writePrice("Gloves", calculateTax(prod[1]));
      break;
    case Product.Umbrella:
      writePrice("Umbrella", calculateTax(prod[1]));
      break;
  }
});

console.log("\n=== Template Literal String Types & Type Aliases ===");
type CityLocation = "London" | "Paris" | "Chicago";
function getCity(city: CityLocation): `City: ${CityLocation}` {
  return `City: ${city}` as `City: ${CityLocation}`;
}

console.log(getCity("London"));

type numberValues = 10 | 20 | 30 | 40;
function getRandomValue(): numberValues {
  return (Math.floor(Math.random() * 4) + 1) as numberValues;
}

console.log(getRandomValue(), typeof getRandomValue());
