/** === using JavaScript Classes ===
 * JS classes are implemented using prototypes.
 * So JS classes have some differences from other more strongly typed languages like C# and Java
 */

// utility to format amounts to U.S. currency
let currencyUS = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

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
