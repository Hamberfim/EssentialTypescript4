"use strict";
// objects literal syntax
let hat = {
  name: "Hat",
  price: 100,
};

let boots = {
  name: "Boots",
  price: 100,
};

let gloves = {
  productName: "Gloves",
  price: "40",
};

// reassignment of properties and the values
gloves.name = gloves.productName;
// delete wrongly name property
delete gloves.productName;
// reassigned a number value to price
gloves.price = 20;

let sumPrices = (...numbers) => numbers.reduce((total, value) => total + (Number.isNaN(Number(value)) ? 0 : Number(value)));

let totalPrice = sumPrices(hat.price, boots.price, gloves.price);
console.log(`Total: $${totalPrice.toFixed(2)} and is type of ${typeof totalPrice}`);

// guarding against undefined objects and properties - fallback values
let propertyCheck = hat.price ?? 0;
console.log(propertyCheck);
let objAndPropertyCheck = (hat ?? {}).price ?? 0;
console.log(objAndPropertyCheck);
let gloveMaterialPropertyCheck = (gloves ?? {}).materials ?? "none";
console.log(gloveMaterialPropertyCheck);
gloves.materials = "leather";
gloveMaterialPropertyCheck = (gloves ?? {}).materials ?? "none";
console.log(gloveMaterialPropertyCheck);

//changing operator - fallback value
let bootsMaterialPropertyCheck = boots?.materials ?? "none";
console.log(bootsMaterialPropertyCheck);
boots.materials = "suede";
bootsMaterialPropertyCheck = boots?.materials ?? "none";
console.log(bootsMaterialPropertyCheck);

// use the spread operator to include the properties of one object into another object literal
let otherBoots = { ...boots };
console.log(otherBoots);

// spread operator - adding, replacing, absorbing properties
let hatWithAdditionalProperties = { ...hat, discounted: true };
console.log(`Additional: ${JSON.stringify(hatWithAdditionalProperties)}`);

let hatWithReplacedProperties = { ...hat, price: 50 };
console.log(`Replaced: ${JSON.stringify(hatWithReplacedProperties)}`);

// rest operator
let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);

// Getters/Setters
let shoes = {
  name: "shoes",
  _price: 132.59,
  _addedTax: 132.59 * 0.07,

  set price(newPrice) {
    this._price = parseFloat(newPrice) ? parseFloat(newPrice) : 0;
    this._addedTax = this._price * 0.07;
  },

  get price() {
    return this._price;
  },

  totalWithTax() {
    let total = this._price + this._addedTax;
    return total;
  },

  /**
   * Original syntax:
   * displayDetails: function() {
   * console.log(`Shoes price: ${this.price} + tax: ${this._addedTax.toFixed(2)} = Total: $${this.totalWithTax().toFixed(2)}`);
   * }
   *
   * As an arrow function (NOT Preferred as arrow functions don't have their own 'this' value):
   * displayDetails: () => console.log(`Shoes price: ${this.price} + tax: ${this._addedTax.toFixed(2)} = Total: $${this.totalWithTax().toFixed(2)}`);
   */
  // concise syntax (best to use concise syntax with a bind method to fix the this value):
  displayDetails() {
    if (this.price === 0) {
      console.log(`>>> ERROR: Shoe price was not a number!`);
    } else {
      console.log(`Shoes price: ${this.price} + tax: ${this._addedTax.toFixed(2)} = Total: $${this.totalWithTax().toFixed(2)}`);
    }
  },
};

// bind method so the 'this' value stay in it's scope rather than going global
shoes.displayDetails = shoes.displayDetails.bind(shoes);
// setting a new price triggers the set price() that calculates tax based on the updated price
shoes.displayDetails();
shoes.price = "149.99"; // parsed to a float
shoes.displayDetails();
shoes.price = "Pizza"; // not parsed - fallback set to zero via ternary expression
shoes.displayDetails();
shoes.price = 89.99;
shoes.displayDetails();
