# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?

Objects are fundamental in JavaScript and very important to get familiar with for the following reasons:

- Organizing Data: Objects allow you to group related data and functions together. This makes your code more organized and easier to understand.
- Reusability: Objects can be defined once and reused throughout your code, reducing redundancy.
- Encapsulation: Objects can hide their internal state and require that interaction happen through methods, providing a way to enforce specific behaviors.
- Prototypal Inheritance: JavaScript uses prototypal inheritance, which means that objects can inherit properties and methods from other objects.
- Built-in Objects: JavaScript has several built-in objects, like Math, Date, Array, and String, that provide useful functionality.

- What are object properties?

A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

- Describe object literal notation.

Object Literal Syntax is the most common and straightforward way to create an object. You will be using this solution about 95% of the time.

const player = {
firstName: 'Aaron',
lastName: 'Judge',
};

- How do you remove a property from an object?

There is only one way to truly remove a property from an object, and that's using the delete operator.

- What are the two ways to get or update the value of a property?

There are two different ways to access and create properties on objects: dot notation and bracket notation

- What is the purpose of interfaces in TypeScript?

There are a few different ways that you can annotate your objects in TypeScript. `interface` is used to correctly annotate objects.

- What are two different ways to describe the shape of an object in TypeScript?

`interface` and `type`

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?

Some properties have a ? before the colon. This is how we can define whether or not a property is optional so that the TypeScript compiler does not get angry if we don't create that property or if we end up deleting it.

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
