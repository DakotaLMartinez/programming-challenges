// find the longest existing palindrome ending at the end
// of the the string
// slice the string into pieces counting up from 0 until
// the first palindrome is found
// at worst case, this will be the final character as
// single character strings are palindromes
// once the palindrome is found, slice the beginning of the
// string before the palindrome, reverse it and add to the end
function solution(input) {
  if (isPalindrome(input)) {
    return input;
  }
  let startingPoint = 0;
  let slice = input.slice(startingPoint);
  while (!isPalindrome(slice)) {
    slice = input.slice(++startingPoint);
  }
  const nonPalindromicBeginning = input.slice(0, startingPoint);
  const lettersToCompletePalindrome = [...nonPalindromicBeginning]
    .reverse()
    .join("");
  return input + lettersToCompletePalindrome;
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true;
  }
  let middleIndex = Math.floor(string.length / 2);
  const hasOddCharacters = string.length % 2 === 1;
  if (hasOddCharacters) { // remove middle character if length is odd
    string = string.slice(0, middleIndex) + string.slice(middleIndex + 1);
  }

  let leftIndex = middleIndex - 1;
  let rightIndex = middleIndex;

  while (leftIndex >= 0) {
    let leftValue = string[leftIndex];
    let rightValue = string[rightIndex];

    if (leftValue !== rightValue) {
      return false;
    }

    leftIndex--;
    rightIndex++;
  }

  return true;
}

module.exports = {
  solution,
  isPalindrome,
};
