# typescript-and-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSON?

JSON, which stands for JavaScript Object Notation, is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language.

JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Python, and many others. These properties make JSON an ideal data-interchange language.

JSON is often used when data is sent from a server to a web page. It is "self-describing" and easy to understand. The JSON format makes it possible to store complex data structure in a format that is easy to read and debug. It supports two structures: objects (unordered collections of key-value pairs) and arrays (ordered sequences of values).

- What are serialization and deserialization?

Serialization, in the context of JSON, is the process of converting a data structure or object state into a format that can be stored or transmitted and reconstructed later. When the resulting series of bits is reread according to the serialization format, it can be used to create an identical clone of the original object.

Deserialization is the process of converting it back to the original format.

- Why are serialization and deserialization useful?

JSON serialization is the process of transforming data into a string representation that can be easily stored or sent over a network. This is particularly useful in web development, where you often need to send data from a server to a client or vice versa.

- How do you serialize a data structure into a JSON string using TypeScript?

JSON.stringify()

- How do you deserialize a JSON string into a data structure using TypeScript?

JSON.parse()

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
