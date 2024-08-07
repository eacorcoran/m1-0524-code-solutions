# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?

Destructuring allows for more concise and readable code, enabling you to extract multiple properties from objects or elements from arrays directly into variables.

- What is the syntax for `Object` destructuring?

Object destructuring allows you to unpack properties from objects into individual variables.

const {property1, property2, property3} = object;

- What is the syntax for `Array` destructuring?

Array destructuring is a convenient way to assign elements from an array to variables.

const numbers: number[] = [70, 80, 90];

// Before array destructuring
const x = numbers[0];
const y = numbers[1];
const z = numbers[2];

// Simple array destructuring
const [x, y, z] = numbers;
console.log(x, y, z); // Outputs: 70, 80, 90

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?

The Object uses the bracket notation ([]) while Arrays utilize curly braces ({}).

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
