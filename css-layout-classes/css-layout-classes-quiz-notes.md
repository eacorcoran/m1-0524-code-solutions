# css-layout-classes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do two div elements "vertically stack" on one another by default?

The div with the class .container is what we would consider the "flex parent". The divs with the class .item are what we would consider the "flex children" or "flex items". The flex children will line up along the main axis of the flex parent no matter what their width. By default the flex-direction: row will line the children up along the horizontal axis. If we changed this to flex-direction: row then the flex children would line up along the vertical axis as the main axis.

- What is the default `flex-direction` of an element with `display: flex`?

By default the flex-direction: row will line the children up along the horizontal axis. If we changed this to flex-direction: row then the flex children would line up along the vertical axis as the main axis.

- What are the three primary components of a page layout? (Which helper classes do you need?)

container, row, columns

- What is the minimum number of **columns** that you should put in a **row**?

1

- What is the purpose of a **container**?

An outer container is included to "contain" the entire layout and give the whole layout a minimum width.

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
