# typescript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Give 6 examples of comparison operators.

Equal (==): Returns true if the operands are equal.
Not equal (!=): Returns true if the operands are not equal.
Strict equal (===): Returns true if the operands are equal and of the same type.
Strict not equal (!==): Returns true if the operands are not equal or not of the same type.
Greater than (>): Returns true if the left operand is greater than the right operand.
Less than (<): Returns true if the left operand is less than the right operand.

- What data type do comparison expressions evaluate to?

Boolean

- What is the purpose of an `if` statement?

An `if` statement evaluates conditional expression and executes a code block if that condition evaluates to true.

if (boolean expression) {
// Code block that executes if the conditional evaluates to true
}

- Is `else` required in order to use an `if` statement?

No, they are optional. While if statements are meant to handle if the conditional expression evaluates to true, else statements give our code a way of executing code if the expression evaluates to false.

- Describe the syntax (structure) of an `if` statement.

if (boolean expression) {
// Code block that executes if the conditional evaluates to true
}

1.  An if statement begins with the if keyword
2.  Inside of the parentheses, an expression needs to go inside so that there is a condition that our code is checking for.
    - A conditional expression will always evaluate to either true or false. Some examples of conditional expressions could be:
      - 7 < 5 which would evaluate to false
      - 'hello' === 'hello' which would evaluate to true

- What are the three logical operators?

Logical AND (&&): This operator returns true if both operands are true, and false otherwise.
Logical OR (||): This operator returns true if at least one of the operands is true, and false otherwise.
Logical NOT (!): This operator returns false if its operand is true, and true if its operand is false.

- How do you compare two different expressions in the same condition?

You can utilize logical operators.

- What is the purpose of a `switch` statement?

Switch statements are useful for when there is a collection of conditions or cases that need to be checked against. This could technically also be done via an else/if statement, but the switch statement makes it a bit more readable and user-friendly.

- Is a `default` clause required in order to use a `switch` statement?

Please note that the default clause is optional. A default clause can technically be omitted, but it's a nice way to handle a final catch all in case any previous clauses did not execute.

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
