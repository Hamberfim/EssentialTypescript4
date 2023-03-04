/** === Chapter 4. JS Primer, Part 2 ===
 * JS Objects have a link to another object, known as the prototype,
 * from which they inherit properties and methods. Because of this, objects form an inheritance chain.
 * This allows complex features (methods/properties) to be defined once and used consistently across all "Objects"
 */

// literal syntax - understanding JS Object inheritance
let hat = {
  name: "Hat",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
//Since hat doesn't have a toString property like hat.price, the JS runtime looks to the hat objects's prototype to find the hat's toString property
console.log(`toString(): ${hat.toString()}`); //result toString(): [object Object] meaning [hat <inherits from> Object]

let boots = {
  name: "Boots",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};

/** === useful Object methods ===
 * Object.getPrototypeOf() This method returns an objects prototype
 * Object.setPrototypeOf() This method changes the prototype of an object
 * Object.getOwnPropertyNames() This method returns the names of an objects own properties
 */
let hatPrototype = Object.getPrototypeOf(hat);
let bootsPrototype = Object.getPrototypeOf(boots);
// hat and boots objects have the same prototype
console.log(`hatPrototype: ${hatPrototype}, bootsPrototype: ${bootsPrototype}, common prototype: ${hatPrototype === bootsPrototype}`);
console.log("hat properties:", Object.getOwnPropertyNames(hat));
console.log("boots properties:", Object.getOwnPropertyNames(boots));

// new properties can be defined and new values can be assigned
// assign a new function to the toString() method through the hat object's prototype
hatPrototype.toString = function () {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
};
// the link both objects maintain to the Object prototype means the new toSting() method will be used for both the hat and boots object
console.log(hat.toString());
console.log(boots.toString());

/** === creating custom prototypes ===
 * Caution must be used when making changes to objects because they will affect all the other objects in the application.
 * The above change assumes there will be a name and price property which wont be the case when toString is called on other objects.
 * A better approach is create a prototype specific to those object that are know to have the properties. */
let ProductProto = {
  toString: function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  },
};
// this set it to only the hat object rather than every object that shares a link to Object prototype
Object.setPrototypeOf(hat, ProductProto); // meaning [hat <inherits from> ProductProto <inherits from> Object]
Object.setPrototypeOf(boots, ProductProto);
console.log("ProductProto Only", hat.toString());
console.log("ProductProto Only", boots.toString());

/** === using Constructor functions ===
 * The results are the same but a constructor function is used to consistently create a new object,
 * configure it's properties and assign it it's correct prototype,
 * all of which is done in one step. */

let Product = function (name, price) {
  this.name = name;
  this.price = price;
};
Product.prototype.toString = function () {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
};

// chaining Constructor functions
let TaxProduct = function (name, price, taxRate) {
  // use the call method to invoke next constructor to ensure the new object are created correctly
  Product.call(this, name, price);
  this.taxRate = taxRate;
};
// link the prototypes together
Object.setPrototypeOf(TaxProduct.prototype, Product.prototype);

TaxProduct.prototype.getPriceIncTax = function () {
  return Number(this.price) * this.taxRate;
};

TaxProduct.prototype.toTaxString = function () {
  return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
};

// accessing overridden prototype methods
TaxProduct.prototype.toString = function () {
  let chainResult = Product.prototype.toString.call(this);
  return `${this.chainResult}, Tax: ${this.getPriceIncTax()}`;
};

let myHat = new TaxProduct("Hat", 100, 1.2); // meaning [myHat <inherits from> TaxedProduct <inherits from> Product <inherits from> Object]
let myBoots = new Product("Boots", 100);
console.log("From Product constructor >> TaxProduct constructor function chaining:", myHat.toTaxString());
console.log("From Product constructor function:", myBoots.toString());

// use instanceof to determine if a constructor's prototype is part of the chain for a specific object
console.log(`myHat and TaxProduct: ${myHat instanceof TaxProduct}`);
console.log(`myHat and Product: ${myHat instanceof Product}`);
console.log(`myBoots and TaxProduct: ${myBoots instanceof TaxProduct}`);
console.log(`myBoots and Product: ${myBoots instanceof Product}`);
