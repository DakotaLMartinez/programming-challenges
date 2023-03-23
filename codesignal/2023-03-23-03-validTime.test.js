const solution = require("./2023-03-23-03-validTime")
// Check if the given string is a correct time 
// representation of the 24 - hour clock.

// Example

// For time = "13:58", the output should be
// solution(time) = true;
// For time = "25:51", the output should be
// solution(time) = false;
// For time = "02:76", the output should be
// solution(time) = false.

describe("validTime", () => {
  test('"13:58" => true', () => {
    expect(solution("13:58")).toBe(true);
  });

  test('"25:51" => true', () => {
    expect(solution("25:51")).toBe(false);
  });

  test('"02:76" => true', () => {
    expect(solution("02:76")).toBe(false);
  });

  test('"24:01" => false', () => {
    expect(solution("24:01")).toBe(false);
  });

  test('"00:00" => true', () => {
    expect(solution("00:00")).toBe(true);
  });

  test('"24:00" => false', () => {
    expect(solution("24:00")).toBe(false);
  });

  test('"23:99" => false', () => {
    expect(solution("23:99")).toBe(false);
  });

  test('"23:59" => true', () => {
    expect(solution("23:59")).toBe(true);
  });

  test('"2:60" => false', () => {
    expect(solution("2:60")).toBe(false);
  });
})