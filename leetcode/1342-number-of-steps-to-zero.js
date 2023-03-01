function numberOfSteps(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else if (number % 2 === 0) {
    return 1 + numberOfSteps(number / 2)
  } else {
    return 1 + numberOfSteps(number - 1);
  }
}

module.exports = numberOfSteps;