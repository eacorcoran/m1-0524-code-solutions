# css-syntax-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the names of the individual pieces of a CSS rule?

CSS is made up of rules (or rulesets) that consist of selectors and declarations blocks. The selector points to the HTML element you want to style, while the declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.

- In CSS, how do you select elements by their `class` attribute?

Class selectors target elements that have a specific class attribute. They are denoted by a dot followed by the class name.

Example:
.error {
color: red;
}

- In CSS, how do you select elements by their tag name?

Type selectors select elements based on their tag name. For example, to style all <div> elements:

Example:
div {
background-color: lightblue;
}

- In CSS, how do you select an element by its `id` attribute?

ID selectors target elements based on their id attribute. They are denoted by a hash # followed by the ID value.

Example:
#unique-element {
border: 2px solid green;
}

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
