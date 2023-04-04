const solution = require("./2023-03-23-02-longestWord")

describe("longestWord", () => {
  test('"Ready, steady, go!" => steady', () => {
    expect(solution("Ready, steady, go!")).toEqual("steady");
  });

  test('"this is a string with no punctuation" => "punctuation"', () => {
    expect(solution("this is a string with no punctuation")).toEqual("punctuation");
  })

  test('"Destination:Pennsylvania" => "Pennsylvania"', () => {
    expect(solution("Destination:Pennsylvania")).toEqual("Pennsylvania");
  })

  test('"Ready[[[, steady, go!" => "steady"', () => {
    expect(solution("Ready[[[, steady, go!")).toEqual("steady")
  });

  test('"Ready111, steady, go!" => "steady"', () => {
    expect(solution("Ready111, steady, go!")).toEqual("steady");
  });
})