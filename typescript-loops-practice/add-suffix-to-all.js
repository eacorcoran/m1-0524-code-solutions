'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newarray = [];
  for (let i = 0; i < words.length; i++) {
    newarray.push(words[i] + suffix);
  }
  return newarray;
}
