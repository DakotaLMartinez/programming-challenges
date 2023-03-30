const solution = require("./2023-03-29-02-messageFromBinary");

describe("messageFromBinary", () => {
  test('"010010000110010101101100011011000110111100100001" => "Hello!"', () => {
    expect(solution("010010000110010101101100011011000110111100100001")).toEqual("Hello!");
  });
})