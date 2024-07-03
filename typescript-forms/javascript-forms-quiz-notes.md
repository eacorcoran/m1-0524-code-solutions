# javascript-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What event is fired when a user places their cursor in a form control?

The focus event in JavaScript is fired when an element has received focus, either from the user selecting it by clicking on it or tabbing over it.

- What event is fired when a user's cursor leaves a form control?

The blur event in JavaScript is triggered when an element loses focus. This can happen when a user clicks outside the element, or tabs away to another element.

- What event is fired as a user changes the value of a form control?

The input event in JavaScript is fired synchronously when the value of an <input>, <select>, or <textarea> element is changed.

- What event is fired when a user clicks the `"submit"` button within a `<form>`?

The submit event in JavaScript is fired when a form is submitted. This can happen either when the user clicks a submit button or when the user presses Enter while inside a form field.

- What does the `event.preventDefault()` method do?

The preventDefault() method of the event object prevents the browser from automatically reloading the page with the form's values in the URL.

- What does submitting a form without `event.preventDefault()` do?

When a user submits a form (the submit button clicked), the default action of the form is to submit the form's data to a URL that processes the data. Form elements have the action and method attributes which specify the URL to submit the form to and the type of request ( get , post , and so on), respectively.

- What property of a form element object contains all of the form's controls.

The HTMLFormElement property elements returns an HTMLFormControlsCollection listing all the form controls contained in the <form> element.

- What property of a form control object gets and sets its value?

The value property. A string that represents the current value of the control. If the user enters a value different from the value expected, this may return an empty string.

- What is one risk of writing a lot of code without checking to see if it works so far?

You will not be able to catch errors quickly.

- What is an advantage of having your console open when writing a JavaScript program?

console.log() is an important function in JavaScript that is used for printing messages to the console. It helps developers debug their code by displaying the output of their program in the console.

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
