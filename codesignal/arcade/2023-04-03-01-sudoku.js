function solution(grid) {
  for (let row = 1; row <= 9; row++) {
    if (hasDuplicate(extractRow(grid, row))) {
      return false;
    }
  }
  for (let col = 1; col <= 9; col++) {
    if (hasDuplicate(extractColumn(grid, col))) {
      return false;
    }
  }
  for (let vertical = 1; vertical <= 3; vertical++) {
    for (let horizontal = 1; horizontal <= 3; horizontal++) {
      const smallSquare = extract3by3(grid, vertical, horizontal);
      if (hasDuplicate(smallSquare)) {
        return false;
      }
    }
  }
  return true;
}

function hasDuplicate(array) {
  const seen = {};
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (seen[number]) {
      return true;
    }
    seen[number] = true;
  }
  return false;
}

function extract3by3(grid, verticalPosition, horizontalPosition) {
  const rowStart = 3 * (verticalPosition - 1);
  const rowEnd = rowStart + 3;
  const colStart = 3 * (horizontalPosition - 1);
  const colEnd = colStart + 3;
  let output = [];
  for (let i = rowStart; i < rowEnd; i++) {
    for (let j = colStart; j < colEnd; j++) {
      output.push(grid[i][j]);
    }
  }
  return output;
}

function extractRow(grid, row) {
  return grid[row - 1];
}

function extractColumn(grid, column) {
  return grid.map(row => {
    return row[column - 1];
  })
}

module.exports = {
  solution,
  hasDuplicate,
  extract3by3,
  extractRow,
  extractColumn
};
