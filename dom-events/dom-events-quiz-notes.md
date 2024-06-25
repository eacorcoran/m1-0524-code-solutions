# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

console.log() is a powerful tool for debugging and an easy way to inspect your variables in the browser.

- What is the purpose of events and event handling?

Events are signals fired inside the browser window that notify of changes in the browser or operating system environment. Programmers can create event handler code that will run when an event fires, allowing web pages to respond appropriately to change.

- Are all possible parameters required to use a JavaScript method or function?

No, javascript will set any missing parameters to the value undefined.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

addEventListener method: You can use the addEventListener method to attach one or many event handlers to an element. This is the most flexible and recommended way to handle events. There are two different ways of passing in callback functions. You can either create the function ahead of time, and pass in a reference to the function into addEventListener, or create the function directly inside the addEventListener method.

- What is a callback function?

A callback function is a function passed into another function as an argument. In the context of event handling, callback functions are used to respond to events triggered by user interactions or other asynchronous actions.

- What object is passed into an event listener callback when the event fires?

The function definition you pass as an event listener to addEventListener will be called later when the event occurs and the event object will be passed in as an argument at that time.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

event.target is going to refer to the element that is responsible for firing the event. You could confirm by comparing to the variable that was assigned the result of the query selector.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  In the top one, the callback function is not being called. While in the bottom one, the callback function is being called. The top one is correct because when you are passing a callback function to the addEventListener, you should not call the function. The goal is to pass only the function definition to the addEventListener.

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
