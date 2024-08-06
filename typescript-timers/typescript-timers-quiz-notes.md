# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?

A callback function is a function that is passed as an argument to another function and is executed after its parent function has completed. Callbacks are often used in JavaScript to handle asynchronous operations, such as waiting for a file to load or a timer to complete.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?

The setTimeout function is used to execute a function after a specified number of milliseconds. It is useful for adding a delay before executing a function.

- How can you set up a function to be called repeatedly without using a loop?

The setInterval function is used to repeatedly execute a function at fixed intervals defined in milliseconds.

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?

If the delay parameter is omitted, setInterval() and setTimeout() uses a default delay of 0 milliseconds, causing the function to execute as frequently as possible.

- What do `setTimeout()` and `setInterval()` return?

They return the output of the functions they are calling.

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
