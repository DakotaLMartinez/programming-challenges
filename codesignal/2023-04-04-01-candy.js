function solution(nChildren, mCandy) {
  const candiesPerChild = Math.floor(mCandy / nChildren);
  return candiesPerChild * nChildren;
}

module.exports = {
  solution
}