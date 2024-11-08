/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let [max, alt, i] = [0, 0, 0];

  while (i < gain.length) {
    alt = alt + gain[i];
    max = Math.max(alt, max);
    i++;
  }

  return max;
};
