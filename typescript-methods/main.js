'use strict';
const heroes = ['Batman', 'Superman', 'Hulk', 'Aquaman'];
let randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
const library = [
  { title: 'Jane Eyre', author: 'Charlotte Bronte' },
  { title: 'Moby-Dick', author: 'Herman Melville' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
const fullName = 'Erin Corcoran';
const firstAndLastName = fullName.split(' ');
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
const employee = {
  name: 'Erin',
  age: 36,
  position: 'CEO',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
