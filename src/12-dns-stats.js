/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = {};
  for (let i = 0; i < domains.length; i++) {
    let temp = [];
    let part = domains[i];
    let idx;
    do {
      temp.push(`.${part.split('.').reverse().join('.')}`);
      idx = part.indexOf('.');
      part = part.substring(idx + 1);
    } while (idx !== -1);
    temp = temp.reverse();
    for (let j = 0; j < temp.length; j++) {
      map[temp[j]] = !Object.prototype.hasOwnProperty.call(map, (temp[j])) ? 1 : +map[temp[j]] + 1;
    }
  }
  return map;
}

module.exports = getDNSStats;
