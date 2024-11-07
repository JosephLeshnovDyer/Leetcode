function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum = sum + nums[i];
  }
  let max = sum / k;

  for (let i = 1; i + k <= nums.length; i++) {
    sum = sum - nums[i - 1] + nums[i + k - 1];
    max = Math.max(sum / k, max);
  }

  return max;
}
