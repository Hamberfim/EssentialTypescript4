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
