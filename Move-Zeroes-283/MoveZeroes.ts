/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length < 2) {
    return;
  }
  let l = 0;
  let r = 1;

  while (r < nums.length) {
    if (nums[l] == 0 && nums[r] != 0) {
      nums[l] = nums[r];
      nums[r] = 0;
      l++;
      r++;
    } else if (nums[l] == 0 && nums[r] == 0) {
      r++;
    } else {
      l++;
      r++;
    }
  }
}
