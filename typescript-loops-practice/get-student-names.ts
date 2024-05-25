interface stud {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStudentNames(students: stud[]): string[] {
  const array = [];
  for (let i = 0; i < students.length; i++) {
    array.push(students[i].name);
  }
  return array;
}
