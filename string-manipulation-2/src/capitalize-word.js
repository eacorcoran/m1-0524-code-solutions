'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() !== 'javascript') {
    const length = word.length;
    const firstLetter = word[0];
    const remainingLetters = word.slice(1, length);
    return firstLetter.toUpperCase() + remainingLetters.toLowerCase();
  } else {
    return 'JavaScript';
  }
}
