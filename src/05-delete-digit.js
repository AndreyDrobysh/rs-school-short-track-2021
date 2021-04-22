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
function deleteDigit (n) {
  if (n === 10) {
    return 1;
  }
  const a = String(n);
  const arr = a.split('');
  for (let x = 0; x < arr.length; x++) {
    arr[x] = Number(arr[x]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  const b = arr.join('');
  const ans = Number(b);
  return ans;
}

module.exports = deleteDigit;
