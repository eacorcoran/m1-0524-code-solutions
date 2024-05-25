'use strict';
/* exported reverse */
function reverse(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i = i - 1) {
    newArray.push(array[i]);
  }
  return newArray;
}
