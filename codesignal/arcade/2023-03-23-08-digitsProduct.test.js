const {
  solution,
  bruteForce,
  extractLargestDigitFactor,
} = require("./2023-03-23-08-digitsProduct");
// Given an integer product, find the smallest positive
// (i.e.greater than 0) integer the product of whose digits
// is equal to product. If there is no such integer,
// return -1 instead.

// Example

// For product = 12, the output should be
// bruteForce(product) = 26;
// For product = 19, the output should be
// bruteForce(product) = -1.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer product

// Guaranteed constraints:
// 0 ≤ product ≤ 600.

// [output] integer

describe("digitsProduct", () => {
  test("12 => 26", () => {
    expect(solution(12)).toEqual(26);
    expect(bruteForce(12)).toEqual(26);
  });

  test("19 => -1", () => {
    expect(solution(19)).toEqual(-1);
    expect(bruteForce(19)).toEqual(-1);
  });

  test("0 => 10", () => {
    expect(solution(0)).toEqual(10);
    expect(bruteForce(0)).toEqual(10);
  });

  test("1 => 1", () => {
    expect(solution(1)).toEqual(1);
    expect(bruteForce(1)).toEqual(1);
  });

  test("4 => 4", () => {
    expect(solution(4)).toEqual(4);
    expect(bruteForce(4)).toEqual(4);
  });

  test("9 => 9", () => {
    expect(solution(9)).toEqual(9);
    expect(bruteForce(9)).toEqual(9);
  });

  test("18 => 29", () => {
    expect(solution(18)).toEqual(29);
    expect(bruteForce(18)).toEqual(29);
  });

  test("180 => 459", () => {
    expect(solution(180)).toEqual(459);
    expect(bruteForce(180)).toEqual(459);
  });

  test("360 => 589", () => {
    expect(solution(360)).toEqual(589);
    expect(bruteForce(360)).toEqual(589);
  });

  test("600 => 3558", () => {
    expect(solution(600)).toEqual(3558);
    expect(bruteForce(600)).toEqual(3558);
  });

  test("120 => ?", () => {
    expect(solution(120)).toEqual(358)
    expect(bruteForce(120)).toEqual(358)
  })

  test("48 => 68", () => {
    expect(solution(48)).toEqual(68)
    expect(bruteForce(48)).toEqual(68)
  })

  test("29 => -1", () => {
    expect(solution(29)).toEqual(-1)
    expect(bruteForce(29)).toEqual(-1)
  })

  test("96 => 268", () => {
    expect(solution(96)).toEqual(268);
    expect(bruteForce(96)).toEqual(268);
  })
});

describe("extractLargestDigitFactor", () => {
  test("12 => 6", () => {
    expect(extractLargestDigitFactor(12)).toEqual(6);
  });

  test("18 => 9", () => {
    expect(extractLargestDigitFactor(18)).toEqual(9);
  });

  test("19 => -1", () => {
    expect(extractLargestDigitFactor(19)).toEqual(-1);
  });
});
