/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "02-common-character-count.jsc".
 */
function getCommonCharacterCount(s1, s2) {
  let newS2 = s2;
  s1.split('').forEach((c) => {
    newS2 = newS2.replace(c, '');
  });
  return s2.length - newS2.length;
}

module.exports = getCommonCharacterCount;
