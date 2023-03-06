/** Using Modules */

// syntax for non-named feature/function import
// import <name-by-which-the-module-will-be-use> from "./location-of-file";
// if the location string does have the period(s) it will look to the node_modules folder,
// i.e., import React from "react";
// import calcTax from "./tax";

// import for non-named and named feature/function imports
import calcTaxAndSum, { calcTax } from "./tax";
import { printDetails, applyDiscount } from "./utils";

// utility to format currency amounts to U.S. dollars
let currencyUS = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

class Product {
  /**
   * A class that represents an product
   * @param {number} name name of the product
   * @param {number} price cost of the product
   */
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }
}

let hat = new Product("Hat", 100);
let taxPrice = calcTax(hat.price);
console.log(`Name: ${hat.name}, Price with tax: ${currencyUS.format(taxPrice)}\n`);
applyDiscount(hat);
printDetails(hat);
applyDiscount(hat, 10);
printDetails(hat);

console.log();

let products = [new Product("Gloves", 23), new Product("Boots", 100, 1.3)];
[...products].forEach((p) => console.log(`${p.name}: ${currencyUS.format(p.price)}`));
let totalPrice = calcTaxAndSum(...products.map((p) => p.price));
console.log(`Total Price with tax: ${currencyUS.format(totalPrice)}`);
