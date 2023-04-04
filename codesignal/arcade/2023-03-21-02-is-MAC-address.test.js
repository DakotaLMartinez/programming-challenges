const solution = require("./2023-03-21-02-is-MAC-address");

describe("isMACAddress", () => {
  test('"00-1B-63-84-45-E6" => true', () => {
    expect(solution("00-1B-63-84-45-E6")).toBe(true);
  });

  test('"Z1-1B-63-84-45-E6" => false', () => {
    expect(solution("Z1-1B-63-84-45-E6")).toBe(false);
  });

  test('"not a MAC-48 address" => false', () => {
    expect(solution("not a MAC-48 address")).toBe(false);
  });

  test('"02-03-04-05-06-07-" => false', () => {
    expect(solution("02-03-04-05-06-07-")).toBe(false);
  });

  test('"-02-03-04-05-06-07" => false', () => {
    expect(solution("02-03-04-05-06-07-")).toBe(false);
  });
})