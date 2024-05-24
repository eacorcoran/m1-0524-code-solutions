'use strict';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStudentNames(students) {
  const array = [];
  for (let i = 0; i < students.length; i++) {
    array.push(students[i].name);
  }
  return array;
}
