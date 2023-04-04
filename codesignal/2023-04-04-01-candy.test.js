const { solution } = require("./2023-04-04-01-candy");

/*
n children have got m pieces of candy. They want to eat as much
candy as they can, but each child must eat exactly the same amount 
of candy as any other child. Determine how many pieces of candy 
will be eaten by all the children together. Individual pieces of 
candy cannot be split.

Example

For n = 3 and m = 10, the output should be
solution(n, m) = 9.

Each child will eat 3 pieces. So the answer is 9.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

The number of children.

Guaranteed constraints:
1 ≤ n ≤ 10.

[input] integer m

The number of pieces of candy.

Guaranteed constraints:
2 ≤ m ≤ 100.

[output] integer

The total number of pieces of candy the children will eat provided 
they eat as much as they can and all children eat the same amount.
*/
describe("candy", () => {
  test("3 kids, 10 candies => 9 eaten", () => {
    expect(solution(3, 10)).toEqual(9);
  })

  test("1 kid, 2 candies => 2 eaten", () => {
    expect(solution(1, 2)).toEqual(2);
  })

  test("1 kid, 4 candies => 4 eaten", () => {
    expect(solution(1, 4)).toEqual(4);
  })

  test("3 kids, 2 candies => 0 eaten", () => {
    expect(solution(3, 2)).toEqual(0);
  })

  test("5 kids, 11 candies => 10 eaten", () => {
    expect(solution(5, 11)).toEqual(10);
  })
})