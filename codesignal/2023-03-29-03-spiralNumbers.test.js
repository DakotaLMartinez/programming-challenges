const { solution, buildEmptyMatrix } = require("./2023-03-29-03-spiralNumbers");
/*
Construct a square matrix with a size N × N containing 
integers from 1 to N * N in a spiral order, starting 
from top-left and in clockwise direction.

Example

For n = 3, the output should be

solution(n) = [[1, 2, 3],
               [8, 9, 4],
               [7, 6, 5]]
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Matrix size, a positive integer.

Guaranteed constraints:
3 ≤ n ≤ 100.

[output] array.array.integer
*/

describe("spiralNumbers", () => {
  test("3 => [[1,2,3], [8,9,4], [7, 6, 5]]", () => {
    expect(solution(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });

  test("4 => ", () => {
    expect(solution(4)).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]);
  });

  test("5", () => {
    expect(solution(5)).toEqual([
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ]);
  });

  test("6", () => {
    expect(solution(6)).toEqual([
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 7],
      [19, 32, 33, 34, 25, 8],
      [18, 31, 36, 35, 26, 9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11],
    ]);
  });
});
