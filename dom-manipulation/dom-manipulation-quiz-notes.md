# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?

className is a property of DOM elements that allows you to access and manipulate the CSS class(es) applied to an element. It represents a space-separated list of class names associated with the element. By changing the value of className, you can add, remove, or toggle CSS classes dynamically, thereby altering the appearance and behavior of the element.

- How do you update the CSS class attribute of an element using JavaScript?

By changing the value of className, you can add, remove, or toggle CSS classes dynamically, thereby altering the appearance and behavior of the element.

- What is the `textContent` property of element objects?

textContent is a property of DOM elements that represents the text content of an element and all it's descendants.

- How do you update the text within an element using JavaScript?

textContent is a property of DOM elements that represents the text content of an element and all it's descendants. Often times in applications, developers will either need a reference to an elements current text, or a way to manipulate an elements text.

- Is the `event` parameter of an event listener callback always useful?

No.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?

It would be more complicated.

- Why is storing information about a program in variables better than only storing it in the DOM?

Each time we query the DOM for an element reference, it requires the interface to search through all of the HTML so that it can find the elements we are looking for. Because of this, it is generally a best practice to store DOM element references in a variable. Once the reference has been saved in a variable, accessing the element again does not require another search.

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
