/**
 * A function to calculates tax
 * @param {number} price - numeric price value of a product
 * @param {number} taxRate - numeric tax rate
 * @returns price with taxRate.  price + (price * taxRate), 20 percent rate is default
 */
// syntax for non-named feature/function
// export default function (price, taxRate = 1.2) {
//   return Number(price) * taxRate;
// }
export function calcTax(price, taxRate = 1.2) {
  return Number(price) * taxRate;
}

/**
 * A function to calculates tax per price and their sum
 * @param  {...number} prices
 * @returns the sum of prices and tax
 */
// non-named - calcTaxAndSum
export default function (...prices) {
  return prices.reduce((total, p) => (total += calcTax(p)), 0);
}
