'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (Math.round(numbers[i] / 2) === numbers[i] / 2) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
