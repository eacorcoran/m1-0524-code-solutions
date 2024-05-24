/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const newarray = [];
  for (let i = 0; i < array.length; i++) {
    newarray.push(i);
  }
  return newarray;
}
