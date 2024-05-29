/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  const newArray = string.split(' ');
  let newString = '';
  for (let i = 0; i < newArray.length; i++) {
    const firstLetter = newArray[i].slice(0, 1);
    const remainingLetters = newArray[i].slice(1, newArray[i].length);
    newString += firstLetter.toUpperCase() + remainingLetters.toLowerCase();
    if (i < newArray.length - 1) {
      newString += ' ';
    }
  }
  return newString;
}
