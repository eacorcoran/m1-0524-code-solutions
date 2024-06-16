# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".

Source Order, Inheritance, Specificity & Important

- What does the term "source order" mean with respect to CSS?

Source order plays a pivotal role in the CSS Cascade, determining which styles are applied when multiple rules could affect the same element.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?

Inheritance is the process by which certain CSS properties on a child HTML element can receive value from a parent element, if no CSS for that property is directly declared on the child element.

- List the three selector types in order of increasing specificity.

Universal selectors (\*) have the lowest specificity, affecting all elements but easily overridden.
Element selectors (e.g., h1) and pseudo-elements (e.g., ::before) have slightly higher specificity.
Class selectors (e.g., .main-nav), attribute selectors (e.g., [type="text"]), and pseudo-classes (e.g., :hover) have more specificity.
ID selectors (e.g., #logo) have even higher specificity.
Inline styles placed directly within an HTML element (style="...") carry a higher specificity than any selector.
!important added to any CSS property value overrides all the above levels of specificity.

- Why is using `!important` considered bad practice?

Using !important is generally discouraged because it disrupts the natural flow of cascading styles, making debugging and maintenance challenging.

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
