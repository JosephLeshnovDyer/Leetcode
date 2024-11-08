var pivotIndex = function (nums) {
  let sum: number = 0;
  let rightArr: Array<number> = [];

  for (let i = nums.length - 1; i >= 0; i = i - 1) {
    rightArr.push(sum);
    sum = sum + nums[i];
  }

  rightArr.reverse();
  sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum == rightArr[i]) {
      return i;
    }
    sum = sum + nums[i];
  }

  return -1;
};
