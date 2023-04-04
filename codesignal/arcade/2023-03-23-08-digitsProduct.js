// divide the product by 2,3,4,5,6,7,8,9 to see which are divisors
// create a dividend variable equal to the product
// for any number that's a factor of the product, store it in an array
// and set the dividend to the result of dividing the product by the
// factor
// if the first found
// factor divides the product such that the result is a single digit
// then the number should be the factor plus the result.
// If the remaining dividend is more than a single digit, then add
// an object to a factors array with the factor as a single produ add an object
// to an array with a factor of the number and a remaining product
// set to the division of the product by the factor

function solution(product) {
  if (product === 0) {
    return 10;
  }
  if (product === 1) {
    return 1;
  }
  let dividend = product;
  let digits = [];
  while (dividend > 1) {
    const largestDigitFactor = extractLargestDigitFactor(dividend);
    dividend /= largestDigitFactor;
    digits.push(largestDigitFactor);
  }

  if (dividend === 1) {
    return Number(digits.sort().join(""));
  }

  return -1;
}

function extractLargestDigitFactor(product) {
  for (let i = 9; i > 1; i--) {
    if (product % i === 0) {
      return i;
    }
  }
  return -1;
}

function bruteForce(product) {
  for (let i = 1; i < 10000; i++) {
    let digits = i.toString().split("").map(Number);
    let digitProduct = digits.reduce((a, b) => a * b);
    if (digitProduct === product) {
      return i;
    }
  }
  return -1;
}

module.exports = {
  solution,
  bruteForce,
  extractLargestDigitFactor,
};
