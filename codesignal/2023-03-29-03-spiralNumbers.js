function solution(dimensions) {
  const matrix = buildEmptyMatrix(dimensions);
  let minX = 0;
  let minY = 0;
  let maxX = dimensions - 1;
  let maxY = dimensions - 1;
  let current = 1;
  while (current < dimensions * dimensions) {
    for (let i = minX; i < maxX; i++) {
      matrix[minY][i] = current++;
    }
    for (let j = minY; j < maxY; j++) {
      matrix[j][maxX] = current++;
    }
    for (let i = maxX; i > minX; i--) {
      matrix[maxY][i] = current++;
    }
    for (let j = maxY; j > minY; j--) {
      matrix[j][minX] = current++;
    }
    minX++;
    minY++;
    maxX--;
    maxY--;
    if (minX === maxX && minY === maxY) {
      matrix[minY][minX] = current++;
    }
  }
  return matrix;
}

function buildEmptyMatrix(dimensions) {
  const matrix = [];
  for (let i = 0; i < dimensions; i++) {
    let row = [];
    for (let j = 0; j < dimensions; j++) {
      row.push(null);
    }
    matrix.push(row);
  }
  return matrix;
}

module.exports = {
  solution,
  buildEmptyMatrix,
};
