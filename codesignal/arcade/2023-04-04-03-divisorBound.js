function solution(divisor, bound) {
  let result = bound;
  while (result % divisor !== 0) {
    result--;
  }
  return result;
}

module.exports = {
  solution
}