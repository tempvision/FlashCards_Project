const shuffle = function(array, n) {
  // n - amount of elements in result
  const maxIndex = array.length - 1;
  const randomEntries = new Map();
  const shuffledArray = [];
  if (n > maxIndex) {
    n = maxIndex;
  }
  while (n--) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    if (!randomEntries.has(randomIndex)) {
      randomEntries.set(randomIndex, array[randomIndex]);
    } else {
      n++;
    }
  }
  randomEntries.forEach((el) => {
    shuffledArray.push(el);
  });
  return shuffledArray;
};
export default shuffle;
