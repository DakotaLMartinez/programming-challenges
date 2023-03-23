function solution(text) {
  let words = text.split(/[^A-Za-z]+/)
  let longest = "";
  words.forEach(word => {
    longest = word.length > longest.length ? word : longest
  })
  return longest;
}

module.exports = solution;