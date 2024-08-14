# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

Promises in JavaScript follow an Event Queue Model where callback functions associated with asynchronous operations are placed into a queue when the operation completes. The JavaScript runtime environment has an event loop that continuously checks this queue and processes the callbacks in the order they arrive. This ensures that the code execution is non-blocking and that operations that take a longer time don't stall the execution of other scripts.

- What are the three states a Promise can be in?

Pending: The initial state; the promise is neither resolved nor rejected.
Fulfilled: The promise has been resolved, and the corresponding then handlers will be called.
Rejected: The promise has been rejected, and the catch handlers will be invoked.

- How do you handle the fulfillment of a Promise?

Fulfillment Handling: The fulfillment of a Promise is managed by attaching a .then() method to the Promise. The .then() method takes a callback function that will be called when the Promise is resolved.

- How do you handle the rejection of a Promise?

Rejection Handling: The rejection of a Promise is managed by attaching a .catch() method. The .catch() method is used to define a callback that will be executed if the Promise is rejected.

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
