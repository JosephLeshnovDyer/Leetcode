function uniqueOccurrences(arr: number[]): boolean {
  let occurrences = new Map<number, number>();
  let uniqueness = new Map<number, number>();
  let result = true;

  arr.forEach((value) => {
    if (!occurrences.get(value)) {
      occurrences.set(value, 1);
    } else {
      occurrences.set(value, occurrences.get(value) + 1);
    }
  });

  occurrences.forEach(function (frequency, num) {
    if (!uniqueness.get(frequency)) {
      uniqueness.set(frequency, 1);
    } else {
      result = false;
    }
  });

  return result;
}
