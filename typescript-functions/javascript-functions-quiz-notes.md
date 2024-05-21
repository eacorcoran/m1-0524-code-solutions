# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

- Describe the parts of a function **definition**.

Function definitions are made of:

- the function keyword
- an optional name
- zero or more parameters
- a code block
- an optional return statement

- Describe the parts of a function **call**.

A function must be called for the code within its code block to run. You simply write the name of the function and placing () parentheses next to it. Within the parentheses, there is a comma-separated list of zero or more arguments. This causes the code block within the function's definition to be executed and the parameters in its definition take on the values of the arguments that were passed.

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?

The key thing to remember about parameters and arguments is that when we define a function, we declare parameters and that when we call a function, we pass it arguments.

- What is the difference between a **parameter** and an **argument**?

A Definition contains parameters. A parameter is a placeholder. It is a variable whose value is not known until we call the function and pass the argument. When the function's code block is run, the parameter will be holding the value of the argument.

- Why are function **parameters** useful?

It allows you to customize the results of a function based on the arguments specified when calling a function. The parameter(s) acts as a placeholder for the argument(s) that will be used when the function is called.

- What two effects does a `return` statement have on the behavior of a function?

1. Causes the function to produce a value we can use in our program.
2. Prevents any more code in the function's code block from being run.

- What is the syntax for defining an arrow function?

The function keyword is not used and an arrow [=>] is used between the parameter list and code block. The => is why this type of function is called an arrow function. The second difference is that arrow functions have an implicit return when curly braces {} are not used to contain the function's code block. Having an implicit return means that an arrow function can return a value without using the return keyword.

example named arrow function:
const add = (num1, num2) => {
return num1 + num2;
};

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

Arrow functions have an implicit return when curly braces {} are not used to contain the function's code block. Having an implicit return means that an arrow function can return a value without using the return keyword.

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
