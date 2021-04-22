/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right - left) / 2 + left);

    if (value === array[mid]) {
      return mid;
    } if (value < array[mid]) {
      right = mid - 1;
    }
    left = mid + 1;
  }
  return 0;
}

module.exports = findIndex;
