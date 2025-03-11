function chunk(array, size) {
  const finalArray = [];
  let chunk = [];
  while (array.length > 0) {
    chunk.push(array.splice(0, 1)[0]);
    if (chunk.length === size || array.length === 0) {
      finalArray.push(chunk);
      chunk = [];
    }
  }
  return finalArray;
}

module.exports = chunk;
