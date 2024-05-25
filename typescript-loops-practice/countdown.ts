/* exported countdown */
function countdown(num: number): number[] {
  const array = [];
  let i = num;
  while (i >= 0) {
    array.push(i);
    i = i - 1;
  }
  return array;
}
