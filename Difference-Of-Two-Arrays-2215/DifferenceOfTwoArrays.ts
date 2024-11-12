function findDifference(nums1: number[], nums2: number[]): number[][] {
  let map = new Map<number, number>();
  let [result1, result2] = [[], []];

  nums1.forEach(function (value) {
    if (!map[value]) {
      map[value] = 1;
    }
  });

  nums2.forEach(function (value) {
    if (!map[value]) {
      result2.push(value);
    }
    map[value] = 2;
  });

  nums1.forEach(function (value) {
    if (map[value] == 1) {
      map[value] = 0;
      result1.push(value);
    }
  });

  return [result1, result2];
}
