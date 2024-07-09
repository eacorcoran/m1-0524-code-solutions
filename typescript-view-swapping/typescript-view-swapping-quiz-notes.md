# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

`event.target` is a property of an event object that refers to the element that triggered the event.

- What is the effect of setting an element to `display: none`?

`display: none` removes the element from the document.

- What does the `element.matches()` method take as an argument and what does it return?

The matches method in JavaScript is a powerful tool used to check if an element would be selected by a given CSS selector string. It's part of the Element interface in the Document Object Model (DOM) and is useful for dynamically testing whether elements match a certain selector without having to loop through a collection of elements.

The matches method returns a boolean value - true if the element would be selected by the specified selector string, and false if it wouldn't.

- How can you retrieve the value of an element's attribute?

The getAttribute() method of the Element interface returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will be null.

- At what steps of the solution would it be helpful to log things to the console?

At all steps until functionality is verified.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

You would have to have a listener on every element.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

You would have to explicitly write an if statement for every tab element and every view element that is checked every time there is one click.

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
