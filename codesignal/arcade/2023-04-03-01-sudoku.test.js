const {
  solution,
  hasDuplicate,
  extract3by3,
  extractRow,
  extractColumn,
} = require("./2023-04-03-01-sudoku");

const grid = [
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5],
];

describe("sudoku", () => {
  test("identifies a solution", () => {
    expect(solution(grid)).toBe(true);
  });

  test("identifies a non-solution", () => {
    const grid = [
      [8, 3, 6, 5, 3, 6, 7, 2, 9],
      [4, 2, 5, 8, 7, 9, 3, 8, 1],
      [7, 9, 1, 2, 1, 4, 6, 5, 4],
      [9, 2, 1, 4, 3, 5, 8, 7, 6],
      [3, 5, 4, 7, 6, 8, 2, 1, 9],
      [6, 8, 7, 1, 9, 2, 5, 4, 3],
      [5, 7, 6, 9, 8, 1, 4, 3, 2],
      [2, 4, 3, 6, 5, 7, 1, 9, 8],
      [8, 1, 9, 3, 2, 4, 7, 6, 5],
    ];
    expect(solution(grid)).toBe(false);
  });
});

describe("hasDuplicate", () => {
  test("[1,2,3,4,5,6,7,8,8] => true", () => {
    expect(hasDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 8])).toBe(true);
  });

  test("[1,2,3,4,5,6,7,8,9] => false", () => {
    expect(hasDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false);
  });
});

describe("extract3by3", () => {
  test("gets the 9 elements in a 3x3 grid", () => {
    expect(extract3by3(grid, 1, 1)).toEqual([1, 3, 2, 4, 6, 5, 7, 9, 8]);
    expect(extract3by3(grid, 3, 1)).toEqual([5, 7, 6, 2, 4, 3, 8, 1, 9]);
    expect(extract3by3(grid, 3, 3)).toEqual([4, 3, 2, 1, 9, 8, 7, 6, 5]);
  });
});

describe("extractRow", () => {
  test("gets row from grid by human readable number", () => {
    expect(extractRow(grid, 1)).toEqual([1, 3, 2, 5, 4, 6, 9, 8, 7]);
    expect(extractRow(grid, 9)).toEqual([8, 1, 9, 3, 2, 4, 7, 6, 5]);
  });
});

describe("extractColumn", () => {
  test("gets a column from tthe grid by human readable number", () => {
    expect(extractColumn(grid, 1)).toEqual([1, 4, 7, 9, 3, 6, 5, 2, 8]);
    expect(extractColumn(grid, 9)).toEqual([7, 1, 4, 6, 9, 3, 2, 8, 5]);
  });
});
