// https://app.codesignal.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx
const {
  solution,
  isPalindrome
} = require("./2023-03-20-01-build-palindrome")

// Given a string, find the shortest possible string which can be 
// achieved by adding characters to the end of initial string to 
// make it a palindrome.

// Example

// For st = "abcdc", the output should be
// solution(st) = "abcdcba".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string st

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string

describe("isPalindrome", () => {
  test('"a" => true', () => {
    expect(isPalindrome("a")).toBe(true);
  })

  test('"aba" => true', () => {
    expect(isPalindrome("aba")).toBe(true);
  })

  test('"abba" => true', () => {
    expect(isPalindrome("abba")).toBe(true);
  })

  test('"racecar" => true', () => {
    expect(isPalindrome("racecar")).toBe(true);
  })
  
  test('"apple" => false', () => {
    expect(isPalindrome("apple")).toBe(false);
  })
});

describe("buildPalindrome", () => {
  test('"aba" => "aba"', () => {
    expect(solution("aba")).toEqual("aba");
  })

  test('"abcdc" => "abcdcba"', () => {
    expect(solution("abcdc")).toEqual("abcdcba")
  })
  
  test('"apple" => "applelppa"', () => {
    expect(solution("abcdc")).toEqual("abcdcba")
  })
  
  test('"abcdce" => "abcdcecdcba"', () => {
    expect(solution("abcdce")).toEqual("abcdcecdcba");
  })

  test('"abbat" => "abbatabba"', () => {
    expect(solution("abbat")).toEqual("abbatabba");
  })
  
  test('"tabba" => "tabbat"', () => {
    expect(solution("tabba")).toEqual("tabbat");
  })


})

