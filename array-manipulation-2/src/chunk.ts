/* exported chunk */
function chunk(array: any[], size: number): any[] {
  const numberOfArrays = Math.ceil(array.length / size);
  const newArray: any[] = [];
  let miniArray: any[] = [];
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
