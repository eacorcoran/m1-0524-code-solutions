interface Book {
  isbn: string;
  title: string;
  author: string;
}

const bookshelf: Book[] = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

console.log(`${bookshelf[1].author} is the author of the second book.`);
console.log(`${bookshelf[0].isbn} is the ISBN of the first book.`);
console.log(`${bookshelf[2].title} is the title of the third book.`);
