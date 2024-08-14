# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?

Client is a computer that gets information from another computer called server in the context of client–server model of computer networks.[1] The server is often (but not always) on another computer system, in which case the client accesses the service by way of a network.[2]

- What is a server?

A server is a computer that provides information to other computers called "clients" on computer network.[1] This architecture is called the client–server model. Servers can provide various functionalities, often called "services", such as sharing data or resources among multiple clients or performing computations for a client.

- Which HTTP method does a browser issue to a web server when you visit a URL?

A complete URL, known as the absolute form, is mostly used with GET when connected to a proxy.

- What three things are on the start-line of an HTTP **request** message?

1. An HTTP method, a verb (like GET, PUT or POST) or a noun (like HEAD or OPTIONS), that describes the action to be performed.
2. The request target, usually a URL, or the absolute path of the protocol, port, and domain are usually characterized by the request context. The format of this request target varies between different HTTP methods.
3. The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

- What three things are on the start-line of an HTTP **response** message?

1. The protocol version, usually HTTP/1.1, but can also be HTTP/1.0.
2. A status code, indicating success or failure of the request. Common status codes are 200, 404, or 302.
3. A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

- What are HTTP headers?

HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

- Where would you go if you wanted to learn more about a specific HTTP Header?

- Is a body required for a valid HTTP request or response message?

Not all requests have one: requests fetching resources like GET or HEAD usually don't need a body. Requests that send data to the server to create a resource, such as PUT or POST requests, typically require a body with the data used to fulfill the request (for instance, HTML form data).

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
