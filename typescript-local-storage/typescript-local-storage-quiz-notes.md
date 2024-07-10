# typescript-local-storage-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do you store data in `localStorage`?

setItem(key, value): This method allows you to store data in localStorage. It takes two parameters: a key and a value. Both parameters should be strings. If the key already exists, this method will update the value.

- How do you retrieve data from `localStorage`?

getItem('key'): This method allows you to retrieve data from localStorage. It takes one parameter: the key of the data you want to retrieve. It returns the value as a string, or null if the key does not exist.

- What data type can `localStorage` save in the browser?

It's important to note that localStorage can only store strings. If you want to store objects or arrays, you'll need to serialize them with JSON.stringify before storing, and then deserialize them with JSON.parse when retrieving.

- When is the safest time to store user data?

In general, whenever the user modifies data, the new value should be stored as quickly as possible. This ensures that the data is safely persisted and won't be lost if the application crashes, the user shuts off their computer, etc. Ideally, the application would not update its interface until the data is safely stored so that the user has confidence their data will not be lost.

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
