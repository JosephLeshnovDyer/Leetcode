function maxArea(height: number[]): number {
  let [l, r] = [0, height.length - 1];
  let [max, maxL, maxR] = [0, 0, 0];

  while (l < r) {
    max = Math.max(getArea(l, height[l], r, height[r]), max);
    if (height[l] < height[r]) {
      l++;
    } else {
      r = r - 1;
    }
  }

  /**
   * Original unoptimzed solution with O(n^2) time complexity
   *
    while (l < height.length-1) {
        if (height[l] > maxL) {
            maxL = height[l]
        } else {
            l++;
            r = l+1;
            continue;
        }
        while (r < height.length) {
            max = Math.max(getArea(l,height[l],r,height[r]),max);
            r++;
        }
        l++;
        r = l+1;
    }
    */

  return max;
}

function getArea(l1: number, l2: number, r1: number, r2: number): number {
  return (r1 - l1) * Math.min(l2, r2);
}
