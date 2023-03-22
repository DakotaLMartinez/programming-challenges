const solution = require("./2023-03-21-03-isDigit");

// Determine if the given character is a digit or not.

describe("isDigit", () => {
  test('"0" => true', () => {
    expect(solution("0")).toBe(true);
  })

  test('"-" => false', () => {
    expect(solution("-")).toBe(false);
  })

  test('"k" => false', () => {
    expect(solution("k")).toBe(false);
  })
  
  test('"2" => true', () => {
    expect(solution("2")).toBe(true);
  })

  test('"9" => true', () => {
    expect(solution("9")).toBe(true);
  })

})