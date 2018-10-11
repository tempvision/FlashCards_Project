const shuffle = function(arrayToShuffle, n) {
  // n - amount of elements in result
  const shuffledArray = arrayToShuffle
    .map((el) => ({
      indexForSorting: Math.random(),
      value: el,
    }))
    .sort((a, b) => a.indexForSorting - b.indexForSorting);
  if (n >= arrayToShuffle.length) {
    return shuffledArray.map((el) => el.value);
  }
  const resultArray = [];
  while (n--) {
    resultArray.push(shuffledArray[n].value);
  }
  return resultArray;
};
export default shuffle;
