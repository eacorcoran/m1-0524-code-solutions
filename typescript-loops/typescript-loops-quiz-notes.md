# typescript-loops-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of a loop?

Loops are a fundamental concept in JavaScript (and in programming in general) for several reasons:

Code Reusability: Loops allow you to execute a block of code multiple times. This can greatly reduce the amount of code you need to write and make your code more readable and maintainable.

Working with Collections: Loops are essential for working with collections of data, such as arrays or objects. You can use a loop to iterate over each item in the collection and perform an operation on it.

Performance: In some cases, using a loop can be more efficient than repeating code, especially when the number of repetitions is large or variable.

Control Flow: Loops, in combination with conditional statements, allow you to control the flow of your program in complex ways.

At the heart of every application is a rich set of data. Loops are one tool that we have as developers to make working and manipulating that data more efficient.

- What is the purpose of a **condition** expression in a loop?

Conditional expressions are used to indicate when the loop should terminate, and stop iterating. The loop will continue to run as long as the conditional expression evaluates to true. The conditional expression runs before each iteration of the loop, so that our code knows whether to continue or terminate the loop.

- What does "iteration" mean in the context of loops?

Iterate is a generic term that means “to repeat” in the context of loops.

- _When_ does the **condition** expression of a `while` loop get evaluated?

The conditional expression runs before each iteration of the loop, so that our code knows whether to continue or terminate the loop.

- _When_ does the **initialization** expression of a `for` loop get evaluated?

The initial expression only runs once before the loop begins to iterate.

- _When_ does the **condition** expression of a `for` loop get evaluated?

The conditional expression runs before each iteration of the loop, so that our code knows whether to continue or terminate the loop.

- _When_ does the **final** expression of a `for` loop get evaluated?

The final expression gets evaluated after each iteration. Once the code inside the loops code block finishes, the final expression will kick in, and then move to the conditional expression.

- Besides a `return` statement, which exits its entire function block, which keyword exits a loop before its **condition** expression evaluates to `false`?

The break statement can be used in any loop (for, while, for..in, etc.). When a break statement is encountered, the program breaks out of the loop and continues executing the code that follows the loop (if any). It does not terminate the function, just the current loop.

- What does the `++` increment operator do?

The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.

- How do you iterate through the keys of an object?

for..in loops are useful for whenever you need to iterate over the properties that exist inside of an object.

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
