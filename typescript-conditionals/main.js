'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}
function isEven(number) {
  if (number % 2 > 0) {
    return false;
  }
  return true;
}
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
  return false;
}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  }
  return false;
}
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Exorcist';
    case 'drama':
      return 'Titanic';
    case 'musical':
      return 'Rent';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
