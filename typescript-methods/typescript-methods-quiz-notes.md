# typescript-methods-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

console.log() is a powerful tool for debugging and an easy way to inspect your variables in the browser.

- What is a method?

A method just refers to a function that is attached to an object in the form of a property. A method is just a function that is a property of an object.

- How is a method different from any other function?

A method is just a function that is a property of an object.

- How do you remove the last element from an array?

pop(): Removes the last element from an array and returns that element.

- How do you round a number down to the nearest integer?

Math.floor(): Rounds a number downward to its nearest integer.

- How do you generate a random number?

Math.random(): Returns a random number between 0 and 1

- How do you delete an element from an array?

splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

- How do you append an element to an array?

push(): Adds one or more elements to the end of an array and returns the new length of the array.

- How do you break a string up into an array?

split(): Splits a string into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

- Do string methods change the original string? How would you check if you weren't sure?

Strings are unique in the sense that they are immutable. If you call a string method on a string, it will not change the original string. You need to assign the result of the method call to a variable to store the mutated string. You can use the console.log() method to show the value of the string before and after a string method is called.

- Is the return value of a function or method useful in every situation?

No.

- How do you get a collection of an objects keys?

Object.keys(): Returns an array of a given object's own property names, iterated in the same order that a normal loop would.

- How do you get a collection of an objects values?

Object.values(): Returns an array of a given object's property values, in the same order as that provided by a for..in loop.

- How do you get a collection of both an objects keys and values?

Object.entries(): Returns an array of a given object's properties and values.

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
