'use strict';
/* exported chunk */
function chunk(array, size) {
  const numberOfArrays = Math.ceil(array.length / size);
  const newArray = [];
  let miniArray = [];
  let interationCount = 1;
  let startingPoint = 0;
  while (interationCount <= numberOfArrays) {
    for (
      let i = startingPoint;
      i < Math.min(size * interationCount, array.length);
      i++
    ) {
      miniArray.push(array[i]);
    }
    interationCount++;
    startingPoint += size;
    newArray.push(miniArray);
    miniArray = [];
  }
  return newArray;
}
