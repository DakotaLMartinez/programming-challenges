const {
  solution,
  rowsBehind,
  seatsBlockedInRow,
} = require("./2023-04-04-02-seatsInTheater");
/*
Your friend advised you to see a new performance in the most popular 
theater in the city. He knows a lot about art and his advice is 
usually good, but not this time: the performance turned out to be 
awfully dull. It's so bad you want to sneak out, which is quite 
simple, especially since the exit is located right behind your row 
to the left. All you need to do is climb over your seat and make 
your way to the exit.

The main problem is your shyness: you're afraid that you'll end up 
blocking the view (even if only for a couple of seconds) of all the 
people who sit behind you and in your column or the columns to your 
left. To gain some courage, you decide to calculate the number of 
such people and see if you can possibly make it to the exit without 
disturbing too many people.

Given the total number of rows and columns in the theater(nRows and 
nCols, respectively), and the row and column you're sitting in, 
return the number of people who sit strictly behind you and in your 
column or to the left, assuming all seats are occupied.
*/

describe("seatsInTheater", () => {
  test("16, 11, 5, 3 => 96", () => {
    expect(solution(16, 11, 5, 3)).toEqual(96);
  });
  test("4, 4, 4, 4 => 0", () => {
    expect(solution(4, 4, 4, 4)).toEqual(0);
  });
  test("4, 4, 4, 1 => 3", () => {
    expect(solution(4, 4, 4, 1)).toEqual(3);
  });
  test("4, 4, 4, 3 => 1", () => {
    expect(solution(4, 4, 4, 3)).toEqual(1);
  });
  test("4, 4, 3, 3 => 2", () => {
    expect(solution(4, 4, 3, 3)).toEqual(2);
  });
  test("4, 4, 3, 2 => 2", () => {
    expect(solution(4, 4, 3, 2)).toEqual(4);
  });
  test("4, 4, 3, 1 => 2", () => {
    expect(solution(4, 4, 3, 1)).toEqual(6);
  });
  test("4, 4, 1, 1 => 15", () => {
    expect(solution(4, 4, 1, 1)).toEqual(12);
  });
  test("nCols, nRows, col, row => num", () => {});
});

describe("rowsBehind", () => {
  test("in 3rd row, 4 rows total => 1", () => {
    expect(rowsBehind(3, 4)).toEqual(1);
  });
  test("in 2nd row, 4 rows total => 2", () => {
    expect(rowsBehind(2, 4)).toEqual(2);
  });
});

describe("seatsBlockedInRow", () => {
  test("in 3rd col, 4 cols total => 2", () => {
    expect(seatsBlockedInRow(3, 4)).toEqual(2);
  });
  test("in 2nd col, 4 cols total => 3", () => {
    expect(seatsBlockedInRow(2, 4)).toEqual(3);
  });
});
