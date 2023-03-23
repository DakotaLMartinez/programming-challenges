function solution(timeString) {
  const [hours, minutes] = timeString.split(':');
  return Number(hours) < 24 && Number(minutes) < 60
}

module.exports = solution;