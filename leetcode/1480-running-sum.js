const runningSum = (numArray) => {
  let sumSoFar = 0;
  return numArray.reduce((runningSum, num) => {
    if (typeof num !== "number") {
      throw new TypeError("numArray must be an array of numbers");
    }
    sumSoFar += num;
    return [...runningSum, sumSoFar];
  }, [])
}

module.exports = runningSum;