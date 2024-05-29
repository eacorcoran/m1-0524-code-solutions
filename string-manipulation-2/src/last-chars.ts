/* exported lastChars */
function lastChars(length: number, string: string): string {
  return string.slice(Math.max(string.length - length, 0), string.length);
}
