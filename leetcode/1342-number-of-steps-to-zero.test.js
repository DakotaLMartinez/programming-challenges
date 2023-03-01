const numberOfSteps = require('./1342-number-of-steps-to-zero');

describe("given 1", () => {
  test("it returns 1", () => {
    expect(numberOfSteps(1)).toEqual(1);
  })
})

describe("given 2", () => {
  test("it returns 2", () => {
    expect(numberOfSteps(2)).toEqual(2);
  })
})

describe("given 3", () => {
  test("it returns 3", () => {
    expect(numberOfSteps(3)).toEqual(3);
  });
});

describe("given 4", () => {
  test("it returns 3", () => {
    expect(numberOfSteps(4)).toEqual(3);
  });
});

describe("given 5", () => {
  test("it returns 4", () => {
    expect(numberOfSteps(5)).toEqual(4);
  });
});

describe("given 6", () => {
  test("it returns 4", () => {
    expect(numberOfSteps(6)).toEqual(4);
  });
});

describe("given 7", () => {
  test("it returns 5", () => {
    expect(numberOfSteps(7)).toEqual(5);
  });
});

describe("given 8", () => {
  test("it returns 4", () => {
    expect(numberOfSteps(8)).toEqual(4);
  });
});

describe("given 9", () => {
  test("it returns 5", () => {
    expect(numberOfSteps(9)).toEqual(5);
  });
});

