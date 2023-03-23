function solution(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  if (rows === 1 || cols === 1) {
    return 0;
  }
  let uniqueSquares = new Set();
  for (let row = 0; row < rows - 1; row++) {
    for (let col = 0; col < cols - 1; col++) {
      let combo = "";
      combo += matrix[row].slice(col, col + 2);
      combo += matrix[row + 1].slice(col, col + 2);
      uniqueSquares.add(combo);
    }
  }
  return uniqueSquares.size;
}

module.exports = solution;