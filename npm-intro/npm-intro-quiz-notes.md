# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

- What is a package?

A package is a file or directory that is described by a package.json file. A package is a file or directory that is described by a package.json file.

- What are some other popular package managers?

Yarn and PNPM.

- How can you create a `package.json` with `npm`?

npm init --yes

- What is a dependency and how do you add one to a package?

"dependencies": Packages required by your application in production.

To add an entry to the "dependencies" attribute of a package.json file, on the command line, run the following command:

npm install <package-name> [--save-prod]

- What happens when you add a dependency to a package with `npm`?

The package.json file gets updated with the dependencies.

- What is a devDependency and how do you add one to a package?

"devDependencies": Packages that are only needed for local development and testing.

To add an entry to the "devDependencies" attribute of a package.json file, on the command line, run the following command:

npm install <package-name> --save-dev

- How do you define and run `npm` scripts? Why are these useful?

You can define a script by adding a scripts object to the package.json.

These are useful because they simplify build and development workflows: npm scripts allow developers to define custom commands for tasks like building, testing, and deploying applications. This makes it easy to automate repetitive tasks and simplify complex workflows, improving overall efficiency and productivity.

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
