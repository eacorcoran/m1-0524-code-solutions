# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

Promises use .then() and .catch() for handling asynchronous operations and chaining, while async/await provides a more readable, synchronous-like syntax for managing asynchronous code with try/catch for error handling.

- When do you use `async`?

Asynchronous programming is a better fit for code that must respond to events – for example, any kind of graphical UI. An example of a situation where programmers use async but shouldn't is any code that can focus entirely on data processing and can accept a “stop-the-world” block while waiting for data to download.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

await is usually used to unwrap promises by passing a Promise as the expression . Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.

You should not use await outside of an asynchronous function's body because you will receive a SyntaxError.

- How do you handle errors with `await`?

Try-Catch Blocks: By encapsulating await statements within a try block, you can catch and handle errors that occur during asynchronous operations. Promises Rejection: When an async function returns a rejected promise, it automatically throws an exception, allowing you to catch and handle it in an outer try-catch block.

- What do `try`, `catch` and `throw` do? When do you use them?

The try statement allows you to define a block of code to be tested for errors while it is being executed. The throw keyword throws an exception when a problem is detected, which lets us create a custom error. The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

If you forget to use await on a Promise in an async function, or if you don't handle the Promise with .then() and .catch(), the Promise will still execute, but the error handling depends on how you manage the Promise.

If you don't await a Promise, it will run asynchronously and return a Promise object immediately. If that Promise is rejected, and you don’t provide any .catch() handlers or try-catch blocks around it, the rejection will go uncaught.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

I prefer 'async/await' because it is the easiest to understand.

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
