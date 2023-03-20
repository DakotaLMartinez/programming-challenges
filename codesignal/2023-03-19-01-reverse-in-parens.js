// iterate over the string character by character
// if the character is not inside parens, then add it to the output
// and move to the next character
// if the character is an opening paren, iterate forward through the string
// to find the closing paren for it and pass the contents in to be reversed
// and fed through the algorithm again
// set the index of the loop to the matching closing paren and continue 
// iterating until the end of the string.

function firstReverseInParens(inputString) {
  let output = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (char === "(") {
      let closingParenIndex = getMatchingParenIndex(inputString, i);
      let insideParens = inputString.slice(i + 1, closingParenIndex);
      output += reverse(firstReverseInParens(insideParens))
      i = closingParenIndex; // move ahead to the end of the parentheses
    } else {
      output += char;
    }
  }
  return output;
}

function getMatchingParenIndex(inputString, openingIndex) {
  let openParens = 1;
  for (let j = openingIndex + 1; j < inputString.length; j++) {
    char = inputString[j];
    if (char === "(") {
      openParens++;
    } else if (char === ")") {
      openParens--;
    }
    if (openParens === 0) {
      return j;
    }
  }
}

function reverse(string) {
  return Array.from(string).reverse().join("");
}

module.exports = firstReverseInParens;
