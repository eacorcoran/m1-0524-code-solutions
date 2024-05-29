'use strict';
/* exported capitalize */
function capitalize(word) {
  const length = word.length;
  const firstLetter = word[0];
  const remainingLetters = word.slice(1, length);
  return firstLetter.toUpperCase() + remainingLetters.toLowerCase();
}
