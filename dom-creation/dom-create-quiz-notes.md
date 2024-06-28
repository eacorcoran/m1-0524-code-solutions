# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?

Yes, this method creates a new element with the specified tag name.

- How do you add an element as a child to another element?

appendChild: This method appends a node as the last child of a node.

- What do you pass as the arguments to the `element.setAttribute()` method?

It will take in 2 arguments, the first being a string of the attribute you are trying to create or update, like class, id, type, etc. The 2nd argument is the value that you would like to assign to that attribute.

- What steps do you need to take in order to insert a new element into the page?

1. Create element: A new DOM element must be created using a method such as document.createElement, specifying the element type.

2. Set attributes and properties: Optionally, set attributes (eg., id, class, src) and properties (e.g., textContent, value) of the newly created element to customize its appearance and behavior.

3. Append to parent: Append the newly created element to its parent node in the DOM using a method such as appendChild().

- What is the `textContent` property of an element object for?

textContent is a property of DOM elements that represents the text content of an element and all it's descendants. Often times in applications, developers will either need a reference to an elements current text, or a way to manipulate an elements text. This functionality is also known as a "getter/setter".

- Name two ways to set the `class` attribute of a DOM element.

You can update the className property or you can use the setAttribute method.

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

This approach allows developers to generate and manipulate elements on the fly, providing flexibility and interactivity to web applications. In large-scale applications, data objects or datasets will usually be provided from a database via an API. In order to successfully show this stored data on the web page, an existing element must be updated with this content, or a new element containing this element must be created.

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
