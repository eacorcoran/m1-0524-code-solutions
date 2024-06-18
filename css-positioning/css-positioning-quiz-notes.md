# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?

static

- How does setting `position: relative` on an element affect document flow?

The element is positioned according to the normal flow of the document.

- How does setting `position: relative` on an element affect where it appears on the page?

The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.

- How does setting `position: absolute` on an element affect document flow?

The element is removed from the normal document flow, and no space is created for the element in the page layout.

- How does setting `position: absolute` on an element affect where it appears on the page?

The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.

- How do you constrain an absolutely positioned element to a containing block?

If the position property is absolute, the containing block is formed by the edge of the padding box of the nearest ancestor element that has a position value other than static (fixed, absolute, relative, or sticky).

- What are the four box offset properties?

The four box offset properties are top, right, bottom, and left.

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
