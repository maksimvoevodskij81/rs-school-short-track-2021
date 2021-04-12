/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n;
  let result = 0;
  let result2 = 0;
  while (number > 0) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  while (result > 0) {
    result2 += result % 10;
    result = Math.floor(result / 10);
  }
  return result2;
}
module.exports = getSumOfDigits;
