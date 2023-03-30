function solution(names) {
  const usedFileNames = {};
  return names.map(name => {
    let filename = name;
    let suffix = 1;
    while (usedFileNames[filename]) {
      filename = `${name}(${suffix++})`;
    }
    usedFileNames[filename] ||= 0;
    usedFileNames[filename]++;
    return filename;
  })
}


module.exports = solution;