/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = n.toString().split('');
  const del = Math.min(...number);
  const result = number.join('').replace(del, '');
  return parseInt(result, 10);
}

module.exports = deleteDigit;
