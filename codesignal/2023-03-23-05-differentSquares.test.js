const solution = require("./2023-03-23-05-differentSquares");

// Given a rectangular matrix containing only digits, calculate
// the number of different 2 × 2 squares in it.

// Example

// For

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// solution(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2

// 2 1
// 2 2

// 2 2
// 2 2

// 2 2
// 1 2

// 2 2
// 2 3

// 2 3
// 2 1

describe("differentSquares", () => {
  test("1 row matrix => 0", () => {
    testMatrix = [[1, 2, 3]];
    expect(solution(testMatrix)).toEqual(0);
  });

  test("1 col matrix => 0", () => {
    testMatrix = [[1], [2], [3]];
    expect(solution(testMatrix)).toEqual(0);
  });

  test("5rows x 3cols => 6", () => {
    testMatrix = [
      [1, 2, 1],
      [2, 2, 2],
      [2, 2, 2],
      [1, 2, 3],
      [2, 2, 1],
    ];
    expect(solution(testMatrix)).toEqual(6);
  });

  test("all same numbers => 1", () => {
    testMatrix = [
      [9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9],
    ];
    expect(solution(testMatrix)).toEqual(1);
  });
});
