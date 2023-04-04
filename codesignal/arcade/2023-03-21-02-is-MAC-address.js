function solution(inputString) {
  return !!inputString.match(/^[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}$/)
}

module.exports = solution;