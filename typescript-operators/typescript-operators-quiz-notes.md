# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

Logical AND (&&): The logical AND operator is used to check for truthy values in variables and take action based on those checks.
Example Tasks:

- Log a custom message if certain variables are truthy.
- Combine conditions to manage complex checks concisely.

Logical OR (||): The logical OR operator to set default values or take alternate actions when variables hold falsy values.
Example Tasks:

- Assign default values to variables.
- Use OR for fallback operations in assignments.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.

The logical OR expression is evaluated left to right, it is tested for possible "short-circuit" evaluation using the following rule: (some truthy expression) || expr is short-circuit evaluated to the truthy expression. Short circuit means that the expr part above is not evaluated, hence any side effects of doing so do not take effect (e.g., if expr is a function call, the calling never takes place).

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

Nullish coalescing operator (??): This operator to handles cases where variables might be null or undefined, providing a reliable way to set default values without the pitfalls of logical OR with falsy values like 0 or ''.
Example Tasks:

- Securely assigning defaults to potentially null or undefined variables.
- Contrast with logical OR to demonstrate differences.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

Conditional (ternary) operator (?:): The ternary operator will be applied for concise conditional expressions, allowing you to write less verbose conditional assignments and operations.
Example Tasks:

- Simplify small if/else blocks into single-line ternary operations.
- Use in return statements or variable assignments for clarity and brevity.

- What is the `?.` (optional chaining) operator? When would you use it?

Optional chaining (?.): This operator is used to safely access properties on objects that might not exist, preventing runtime errors due to undefined or null object properties.
Example Tasks:

- Safely access deeply nested properties.
- Prevent errors in accessing properties of potentially null/undefined objects.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

Spread syntax (...): This is used to clone or merge objects and arrays, which is extremely useful in state management scenarios, like managing local component state in frameworks like React.

Syntax: [...iterableObj, newElement] for arrays or {...obj, newProp: value} for objects.

- What data types can be spread into an array? Into an object?

An iterable, such as an array or string.

- How does spread syntax differ from rest syntax?

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
