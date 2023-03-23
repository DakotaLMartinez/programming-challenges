const solution = require("./2023-03-23-01-deleteDigit");

// Given some integer, find the maximal number you can obtain
// by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// Guaranteed constraints:
// 10 ≤ n ≤ 106.

// [output] integer

describe("deleteDigit", () => {
  test('152 => 52', () => {
    expect(solution(152)).toEqual(52);
  })

  test('1001 => 101', () => {
    expect(solution(1001)).toEqual(101);
  })

  test('582 => 82', () => {
    expect(solution(582)).toEqual(82);
  })

  test('5820 => 820', () => {
    expect(solution(5820)).toEqual(820);
  })
})