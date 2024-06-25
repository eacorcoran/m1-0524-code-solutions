# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

console.log() is a powerful tool for debugging and an easy way to inspect your variables in the browser.

- What is a "model"?

It provides a structured representation of the web page.

- Which "document" is being referred to in the phrase Document Object Model?

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

- What is the word "object" referring to in the phrase Document Object Model?

The web page's contents. All of the properties, methods, and events available for manipulating and creating web pages are organized into objects.

- What is a DOM Tree?

It's referencing the tree-like structure of HTML elements. Each web page is modeled as a tree of objects, with the HTML document as the root, and other elements (like <body>, <header>, <div>, etc.) as branches and leaves.

- Give two examples of `document` methods that retrieve a single element from the DOM.

querySelector(selector): This method returns the first element that matches a specified CSS selector.

getElementById(id): This method returns the element that matches it's ID.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll(selector): This method returns a NodeList of all elements in the document that match a specified CSS selector.

- Why might you want to assign the return value of a DOM query to a variable?

Each time we query the DOM for an element reference, it requires the interface to search through all of the HTML so that it can find the elements we are looking for. Because of this, it is generally a best practice to store DOM element references in a variable. Once the reference has been saved in a variable, accessing the element again does not require another search.

- What `console` method allows you to inspect the properties of a DOM element object?

The console.dir() static method displays a list of the properties of the specified JavaScript object. In browser consoles, the output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?

querySelector(selector): This method returns the first element that matches a specified CSS selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?

querySelectorAll(selector): This method returns a NodeList of all elements in the document that match a specified CSS selector.

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
