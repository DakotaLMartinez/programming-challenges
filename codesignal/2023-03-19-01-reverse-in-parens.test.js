// https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6
const reverseInParens = require("./2023-03-19-01-reverse-in-parens")
const reverseInParensWithSplit = require("./2023-03-19-01-reverse-in-parens-with-split")

describe("reverseInParens", () => {
  test('"(bar)" => rab', () => {
    expect(reverseInParens("(bar)")).toEqual("rab")
    expect(reverseInParensWithSplit("(bar)")).toEqual("rab")
  });

  test('"foo(rab)" => foobar"', () => {
    expect(reverseInParens("foo(rab)")).toEqual("foobar")
    expect(reverseInParensWithSplit("foo(rab)")).toEqual("foobar")
  })

  test('"foo(rab)(zab)" => foobarbaz"', () => {
    expect(reverseInParens("foo(rab)(zab)")).toEqual("foobarbaz");
    expect(reverseInParensWithSplit("foo(rab)(zab)")).toEqual("foobarbaz");
  });
  
  test('"foo(bar)baz" => foorabbaz"', () => {
    expect(reverseInParens("foo(bar)baz")).toEqual("foorabbaz");
    expect(reverseInParensWithSplit("foo(bar)baz")).toEqual("foorabbaz");
  });

  test('"foo(bar)baz(blim)" => foorabbazmilb"', () => {
    expect(reverseInParens("foo(bar)baz(blim)")).toEqual("foorabbazmilb");
    expect(reverseInParensWithSplit("foo(bar)baz(blim)")).toEqual("foorabbazmilb");
  });

  test('"foo(bar(baz))blim" => foorabbazmilb"', () => {
    expect(reverseInParens("foo(bar(baz))blim")).toEqual("foobazrabblim");
    expect(reverseInParensWithSplit("foo(bar(baz))blim")).toEqual("foobazrabblim");
  });


})