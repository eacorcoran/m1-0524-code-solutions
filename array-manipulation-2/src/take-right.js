'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  const startingIndex = Math.max(array.length - count, 0);
  for (let i = startingIndex; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
