/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newarray = [];
  for (let i = 0; i < words.length; i++) {
    newarray.push(words[i] + suffix);
  }
  return newarray;
}
