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
  const digits = String(n).split('');
  const min = digits.reduce((a, b) => Math.min(+a, +b));
  const lastIdx = digits.lastIndexOf(String(min));
  return +digits.filter((_, idx) => idx !== lastIdx).join('');
}

module.exports = deleteDigit;
