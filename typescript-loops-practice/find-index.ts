/* exported findIndex */
function findIndex(array: any[], value: any): number {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      break;
    }
  }
  return index;
}
