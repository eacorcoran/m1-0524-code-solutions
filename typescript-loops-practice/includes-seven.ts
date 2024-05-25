/* exported includesSeven */
function includesSeven(array: any[]): boolean {
  let containsSeven = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      containsSeven += 1;
      break;
    }
  }
  if (containsSeven >= 1) {
    return true;
  } else {
    return false;
  }
}
