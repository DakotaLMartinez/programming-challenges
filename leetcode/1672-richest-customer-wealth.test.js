const maximumWealth = require("./1672-richest-customer-wealth");
// constraints
// m == accounts.length; // number of customers
// n == accounts[i].length; // number of accounts per customer
// 1 <= m, n <= 50;
// 1 <= accounts[i][j] <= 100;
describe("given a 2D array of m*n integer grid of:", () => {
  test("2 customers and 3 accounts, returns the maximum customer wealth", () => {
    const accounts = [
      [1, 2, 3],
      [3, 2, 1],
    ];
    expect(maximumWealth(accounts)).toBe(6);
  })

  test("3 customers and 2 accounts, returns the maximum customer wealth", () => {
    const accounts = [
      [1, 5],
      [7, 3],
      [3, 5],
    ];
    expect(maximumWealth(accounts)).toBe(10);
  })

  test("3 customers and 3 accounts, returns the maximum customer wealth", () => {
    const accounts = [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ];
    expect(maximumWealth(accounts)).toBe(17);
  })


})