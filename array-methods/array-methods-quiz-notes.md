# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
  * The forEach() method executes a provided function once for each array element.
  - What should the callback function do?
  * It should execute a function for each element/
  - What is `Array.forEach` useful for?
  * Unlike map() or reduce() it always returns undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.
  * forEach() does not mutate the array on which it is called (although callback, if invoked, may do so).
- `Array.map`:
  - What does `Array.map` do?
  * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  - What should the callback function return?
  * The function is called for every element of arr. Each time callback executes, the returned value is added to newArray.
  - What is `Array.map` useful for?
  * Creating a new array based on the results of the callback function.
  * The method does not mutate the array on which it is called but returns a new array.
- `Array.find`:
  - What does `Array.find` do?
  * The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
  - What should the callback function return?
  * A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
  - What is `Array.find` useful for?
  * Finding the first element that meets criteria. If such an element is found, find() immediately returns the value of that element. Otherwise, find() returns undefined.
- `Array.filter`:
  - What does `Array.filter` do?
  * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  - What should the callback function return?
  * Function returns true to keep the element, false otherwise.
  - What is `Array.filter` useful for?
  * Creating a new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

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
