function compress(chars: string[]): number {
  let [l, r, count] = [0, 0, 0];
  let curr: string = chars[0];

  while (r < chars.length) {
    if (chars[r] == curr) {
      count++;
    } else if (count == 1) {
      chars[l] = curr;
      l++;
      curr = chars[r];
      count = 1;
    } else if (count > 1) {
      let countArr = count.toString().split("");
      chars[l] = curr;
      for (let i = 0; i < countArr.length; i++) {
        chars[l + 1 + i] = countArr[i];
      }
      l = l + countArr.length + 1;
      count = 1;
      curr = chars[r];
    }
    r++;

    if (r == chars.length) {
      chars[l] = curr;
      l++;
      if (count > 1) {
        let countArr = count.toString().split("");
        for (let i = 0; i < countArr.length; i++) {
          chars[l + i] = countArr[i];
        }
        l = l + countArr.length;
      }
    }
  }

  return l;
}
