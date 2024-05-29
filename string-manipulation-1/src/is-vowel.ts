/* exported isVowel */
function isVowel(char: string): boolean {
  if (
    char.toLowerCase() === 'a' ||
    char.toLowerCase() === 'e' ||
    char.toLowerCase() === 'i' ||
    char.toLowerCase() === 'o' ||
    char.toLowerCase() === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}
