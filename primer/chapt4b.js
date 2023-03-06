/** === using JavaScript Classes ===
 * JS classes are implemented using prototypes.
 * So JS classes have some differences from other more strongly typed languages like C# and Java
 */

// utility to format amounts to U.S. currency
let currencyUS = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
console.log("\n==== classes ====");
/**
 * A class representing a product.
 * @constructor
 * @param  {string} name - the product name.
 * @param {number} price - the price of the product.
 * @method toString() - returns a formatted string of name and price
 */
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

// === using inheritance in classes
console.log("\n==== Inheritance in classes ====");
/** TaxedProduct: A class that extends Product to provide the price plus tax.
 * @constructor
 * @param  {string} name - the product name.
 * @param {number} price - the price of the product.
 * @param {number} taxRate - the tax rate.
 * @method getPriceIncTax() - returns the price time tax rate.
 * @method toString() - returns a chained toString() result from the product class formatted string of name, price and total with tax.
 */
class TaxedProduct extends Product {
  constructor(name, price, taxRate = 1.2) {
    // use super() to invoke the superclass/parent-class' constructor
    super(name, price);
    this.taxRate = taxRate;
  }
  getPriceIncTax() {
    return Number(this.price) * this.taxRate;
  }

  toString() {
    // super keyword used to access the superclass/parent-class' properties and methods
    // this toString method invokes the superclass's toString method
    let chainResult = super.toString();
    // currencyUS.format is a simple utility to format currency
    return `${chainResult}, Total with Tax: ${currencyUS.format(this.getPriceIncTax())}`;
  }

  // defining static methods - the static keyword is applied to create a static method that is accessed through the class rather than the object it creates
  static process(...products) {
    products.forEach((p) => console.log(p.toString()));
  }
}
let hat = new TaxedProduct("Hat", 100);
let boots = new TaxedProduct("Boots", 100, 1.3);
console.log(hat.toString());
console.log(boots.toString());

// accessing the static process method
TaxedProduct.process(new TaxedProduct("Gloves", 50.0, 1.289), new TaxedProduct("Socks", 19.99), new TaxedProduct("Scarf", 25.99, 1.19));

/** Iterators and Generators
 * Iterators are objects that return a sequence of values.
 * An iterator defines a next function that returns an object with 'value' and 'done' properties.
 * The 'value' property returns the next value in the sequence and the'done' property is set to true when the sequence is complete
 */
console.log("\n==== Iterator ====");
function createProductIterator() {
  const newHat = new Product("New Hat", 33.99);
  const newBoots = new Product("New Boots", 89.99);
  const umbrella = new Product("Umbrella", 103.99);

  let lastValue = undefined;

  return {
    next() {
      switch (lastValue) {
        case undefined:
          lastValue = newHat;
          return { value: newHat, done: false };
        case newHat:
          lastValue = newBoots;
          return { value: newBoots, done: false };
        case newBoots:
          lastValue = umbrella;
          return { value: umbrella, done: false };
        case umbrella:
          return { value: undefined, done: true };
      }
    },
  };
}

let iterator = createProductIterator();
let result = iterator.next();
while (!result.done) {
  console.log(result.value.toString());
  result = iterator.next();
}

/** Generator
 * A generator offers a simpler approach. A generator is a function that is invoked once and uses the 'yield' keyword to produce the values in the sequence.
 * In a generator the JS runtime creates the next() function and upon reaching the last yield statement, the objects done property is set to true.
 * Generator functions are denoted with a asterisk * right after the function keyword: 'function*'
 */
console.log("\n==== Generator ====");
function* createProductIteratorGen() {
  yield new Product("Rain Boots", 45.99);
  yield new Product("Rain Slicker", 103.99);
  yield new Product("Rain Trousers", 199.99);
}

// generator can be used with the spread operator, allowing the sequence to be used as a set of function parameters or to populate an array
[...createProductIteratorGen()].forEach((p) => console.log(p.toString()));

// group related data items via a class and use a generator to allow the items to be sequenced
console.log("\n==== Iterable Object ====");
class GiftThreePack {
  constructor(name, prod1, prod2, prod3) {
    this.name = name;
    this.prod1 = prod1;
    this.prod2 = prod2;
    this.prod3 = prod3;
  }

  getTotalPrice() {
    return [this.prod1, this.prod2, this.prod3].reduce((total, p) => total + p.price, 0);
  }

  // *getGenerator() {
  //   yield this.prod1;
  //   yield this.prod2;
  //   yield this.prod3;
  // }

  // use the special method name for the generator to simplify the syntax for using the iterator
  // Symbol.iterator property is used to denote the default iterator for an object
  *[Symbol.iterator]() {
    yield this.prod1;
    yield this.prod2;
    yield this.prod3;
  }
}

let winter = new GiftThreePack("winter", new Product("Fleece Cap", 12.99), new Product("Fleece Gloves", 12.99), new Product("Fleece Socks", 12.99));
// [...winter.getGenerator()].forEach((p) => console.log(`Product: ${p}`));
[...winter].forEach((p) => console.log(`Product: ${p}`)); // using the Symbol.iterator property means the object can be iterated directly
console.log(`Fleece Gift Pack Total: ${winter.getTotalPrice()}`);

/** Collections of data are managed by using objects and arrays. Objects store data by a key and arrays by an index
 *  JavaScript also has dedicated collection objects that provide more structure but are less flexible.
 */
console.log("\n==== Collections ====");
// store data by key using an object
let data = {
  // 'ballCap' is the key, it's value  is 'Ball Cap', & 7.99
  ballCap: new Product("Ball Cap", 7.99),
  tennisShoes: new Product("Tennis Shoes", 87.99),
};
// add new values to the data collection
data.BaseballGlove = new Product("Baseball Glove", 65.99);

// return an array of keys: Object.keys(object)
Object.keys(data).forEach((key) => console.log(`Key: ${key}, Value: ${data[key]}`));
// return an array of values: Object.values(object)
// Object.values(data).forEach((value) => console.log(`Value: ${value}`));

// storing data by key using map - .set(key, value)  .get(key)  .keys()  . values()  .entries()
let prodData = new Map();
prodData.set("ketchup", new Product("ketchup", 3.99));
prodData.set("mustard", new Product("mustard", 2.99));
prodData.set("mayo", new Product("mayo", 4.99));
[...prodData.keys()].forEach((key) => console.log(prodData.get(key).toString()));

// using Symbols for map keys Map allows any value to be used as a key including Symbol which are unique and immutable
class Product2 {
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }
}

class Supplier {
  constructor(name, productIds) {
    this.name = name;
    this.productIds = productIds;
  }
}
let acmeProducts = [new Product2("Fiat", 19000), new Product2("Mini", 22000)];
let zoomProducts = [new Product2("Fiat", 19000), new Product2("Mini", 22000)];

let products = new Map();
[...acmeProducts, ...zoomProducts].forEach((p) => products.set(p.id, p));
let suppliers = new Map();

suppliers.set(
  "acme",
  new Supplier(
    "Acme Co",
    acmeProducts.map((p) => p.id)
  )
);
suppliers.set(
  "zoom",
  new Supplier(
    "Zoom Co",
    zoomProducts.map((p) => p.id)
  )
);

suppliers.get("acme").productIds.forEach((id) => {
  console.log(`Name: ${products.get(id).name}`);
});

// sort data by index/set -  the need to allow or prevent duplicate values is the reason to choose between an array or Set()
let product = new Product2("Hat", 100);
let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
  productArray.push(product); // stores five of the same value
  productSet.add(product); // stores only one unique value
}

console.log(`Array Length: ${productArray.length}`);
console.log(`Set size: ${productSet.size}`);
// useful Set methods .add(value)  .entries()  .has(value)  .forEach(callback)
