/* exported ransomCase */
function ransomCase(string: string): string {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i / 2 === Math.floor(i / 2)) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
