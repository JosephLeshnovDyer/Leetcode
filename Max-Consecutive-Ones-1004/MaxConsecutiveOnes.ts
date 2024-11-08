/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let [l, zeroCount, max] = [0, 0, 0, 0];

  for (let i = 0; zeroCount < k; i++) {
    if (nums[i] == 0) {
      zeroCount++;
    }
    max++;
    if (max == nums.length) {
      return max;
    }
  }

  let [r, currCount] = [max, max];

  while (r < nums.length) {
    if (nums[r] == 1) {
      currCount++;
      r++;
    } else if (nums[r] == 0 && nums[l] == 0) {
      l++;
      r++;
    } else if (nums[r] == 0 && nums[l] == 1) {
      l++;
      currCount = currCount - 1;
    }
    max = Math.max(currCount, max);
  }

  return max;
};
