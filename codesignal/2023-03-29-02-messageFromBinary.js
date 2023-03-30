function solution(string) {
  let output = "";
  for (let i = 0; i < string.length; i += 8) {
    let num = parseInt(string.slice(i, i + 8), 2);
    output += String.fromCharCode(num);
  }
  return output;
}

module.exports = solution;