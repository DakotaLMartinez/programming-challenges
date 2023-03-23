function solution(inputString) {
  let numbers = inputString.split(/[^0-9]+/).map(Number);
  return numbers.reduce((a, b) => a + b);
}

module.exports = solution;
