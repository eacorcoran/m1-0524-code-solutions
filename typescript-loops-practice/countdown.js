'use strict';
/* exported countdown */
function countdown(num) {
  const array = [];
  let i = num;
  while (i >= 0) {
    array.push(i);
    i = i - 1;
  }
  return array;
}
