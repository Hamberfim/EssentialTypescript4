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
// an empty array would inferred the 'any[]' type
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

// using Tuples
