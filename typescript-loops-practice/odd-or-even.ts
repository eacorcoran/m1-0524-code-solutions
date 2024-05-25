/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (Math.round(numbers[i] / 2) === numbers[i] / 2) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
