function solution(string) {
  let output = "";
  let consecutiveCount = 1;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let nextChar = string[i + 1];
    if (char !== nextChar) {
      output += consecutiveCount > 1 ? `${consecutiveCount}${char}` : char;
      consecutiveCount = 1;
    } else {
      consecutiveCount++;
    }
  }
  return output;
}

module.exports = solution;