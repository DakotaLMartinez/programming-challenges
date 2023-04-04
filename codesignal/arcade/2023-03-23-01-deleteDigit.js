function solution(n) {
  let largestSeen = 0;
  let numString = n.toString();
  for (let i = 0; i < numString.length; i++) {
    let newNum = Number(numString.slice(0, i) + numString.slice(i + 1))
    if (newNum > largestSeen) {
      largestSeen = newNum;
    }
  }
  return largestSeen
}

module.exports = solution;
