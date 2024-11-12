function equalPairs(grid: number[][]): number {
  let lineMap = new Map<string, number>();
  let width = grid[0].length;
  let result = 0;

  grid.forEach((row) => {
    let rowStr = row.toString();

    if (!lineMap.get(rowStr)) {
      lineMap.set(rowStr, 1);
    } else {
      lineMap.set(rowStr, lineMap.get(rowStr) + 1);
    }
  });

  for (let i = 0; i < width; i++) {
    let colStr = "";

    grid.forEach((row) => {
      colStr = colStr + row[i] + ",";
    });

    colStr = colStr.slice(0, -1);

    if (lineMap.get(colStr)) {
      result = result + lineMap.get(colStr);
    }
  }

  return result;
}
