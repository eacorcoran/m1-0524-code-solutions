'use strict';
/* exported includes */
function includes(array, value) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      count += 1;
      break;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}
