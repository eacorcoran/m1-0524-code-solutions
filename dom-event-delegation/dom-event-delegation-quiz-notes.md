# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

`event.target` is a property of an event object that refers to the element that triggered the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?

Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

- What DOM element property tells you what type of element it is?

event.TagName

- What does the `element.closest()` method take as its argument and what does it return?

The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector. The argument is a string of a valid CSS selector to match the Element and its ancestors against. It returns the closest ancestor Element or itself, which matches the selectors. If there are no such element, null.

- How can you remove an element from the DOM?

The Element.remove() method removes the element from the DOM.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

You can use event delegation.

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
