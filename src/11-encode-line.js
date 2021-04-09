/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return str;
  }
  const arr = str.split('');
  let a = arr.shift();
  let count = 1;
  let encoded = '';
  while (arr.length > 0) {
    const next = arr.shift();
    if (a === next) {
      count++;
    } else {
      encoded = count === 1 ? encoded + a : encoded + count + a;
      count = 1;
    }
    a = next;
  }
  encoded = count === 1 ? encoded + a : encoded + count + a;
  return encoded;
}

module.exports = encodeLine;
