'use strict';
/* exported take */
function take(array, count) {
  const newArray = [];
  const iterations = Math.min(count, array.length);
  for (let i = 0; i < iterations; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
