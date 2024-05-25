/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  const newArray = [];
  const startingIndex: number = Math.max(array.length - count, 0);
  for (let i = startingIndex; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
