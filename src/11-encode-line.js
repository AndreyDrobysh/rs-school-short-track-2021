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
  const arr = str.split('');
  const ans = [];
  let x = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      x += 1;
    } else {
      ans.push(x);
      ans.push(arr[i]);
      x = 1;
    }
  }
  const answer = ans.filter((item) => item !== 1)
    .join('');

  return answer;
}

module.exports = encodeLine;
