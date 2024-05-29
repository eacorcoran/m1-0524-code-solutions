/* exported getWords */
function getWords(string: string): string[] {
  const newArray: string[] = [];
  if (string === '') {
    return newArray;
  } else {
    return string.split(' ');
  }
}
