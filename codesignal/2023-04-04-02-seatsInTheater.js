function solution(nCols, nRows, col, row) {
  return rowsBehind(row, nRows) * seatsBlockedInRow(col, nCols);
}

function rowsBehind(row, nRows) {
  return nRows - row;
}

function seatsBlockedInRow(col, nCols) {
  return nCols - (col - 1);
}

module.exports = {
  solution,
  rowsBehind,
  seatsBlockedInRow
}
