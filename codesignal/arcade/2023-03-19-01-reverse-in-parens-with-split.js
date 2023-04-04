function reverseInParens(inputString) {
  const splitOnOpens = inputString.split("(");
  if (splitOnOpens.length === 1) {
    return inputString;
  }

  const afterLastOpenParen = splitOnOpens.pop();
  const before = splitOnOpens.join("(");

  const [inParens, ...afterFirstCloseParen] = afterLastOpenParen.split(")");
  const reversed = Array.from(inParens).reverse().join("");
  const after = afterFirstCloseParen.join(")");

  return reverseInParens(before + reversed + after);
}

module.exports = reverseInParens