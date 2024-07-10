'use strict';
let Books = [
  {
    isbn: '1538715600',
    title: 'The Friend Zone',
    author: 'Abby Jimenez',
  },
  {
    isbn: 'B08NZCLPL6',
    title: 'Once Upon a Broken Heart',
    author: 'Stephanie Garber',
  },
  {
    isbn: 'B08HLPZY6X',
    title: 'Shards of Earth (The Final Architecture Book 1)',
    author: 'Adrian Tchaikovsky',
  },
];
console.log('Books:', Books);
console.log('Type of Books:', typeof Books);
const jsonBooks = JSON.stringify(Books);
console.log('jsonBooks: ', jsonBooks);
console.log('Type of jsonBooks: ', typeof jsonBooks);
const studentJSON = '{"id": 12345, "name": "Erin Corcoran"}';
console.log('studentJSON: ', studentJSON);
console.log('Type of studentJSON: ', typeof studentJSON);
const student = JSON.parse(studentJSON);
console.log('student: ', student);
console.log('Type of student: ', typeof student);
