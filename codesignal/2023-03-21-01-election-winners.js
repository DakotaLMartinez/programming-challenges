// iterate over the array of votes to determine the leading candidate
// filter the array to determine all the candidates whose current 
// vote count combined with k votes would put them ahead of the leading 
// candidate
// the length of the filtered array is the number of candidates who 
// could still win

function solution(votesArray, k) {
  let maxVoteCount = Math.max(...votesArray);
  if (k === 0) {
    const candidatesAtMax = votesArray.filter((voteCount) => {
      return maxVoteCount === voteCount;
    }).length;
    return candidatesAtMax === 1 ? 1 : 0
  }
  return votesArray.filter(voteCount => {
    return (voteCount + k) > maxVoteCount;
  }).length
}

module.exports = solution;