const runningSum = require("./1480-running-sum");

describe("given an array of length 1 number", () => {
  test("given a 1 number array returns an identical array", () => {   
      expect(runningSum([1])).toEqual([1]);
  });
});

describe("given an empty array", () => {
  test("returns an empty array", () => {   
      expect(runningSum([])).toEqual([]);
  });
});

describe("given an array of multiple numbers", () => {
  test("returns an array of their sums", () => {   
      expect(runningSum([1,2,3,4])).toEqual([1,3,6,10]);
  });
});

describe("given an array containing other types", () => {
  test("raises a TypeError", () => { 
    function withStrings() {
      runningSum(["hello", "world"])
    }
    function withObjects() {
      runningSum([{message: "hello"}, {message: "world"}])
    }
    expect(withStrings).toThrow(new TypeError("numArray must be an array of numbers"))
    expect(withObjects).toThrow(new TypeError("numArray must be an array of numbers"))
  })
})