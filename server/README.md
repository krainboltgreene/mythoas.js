# server

This is where the application is booted and then made concurrent. It uses [connect][NPMCONNECT] to read/write and [throng][NPMTHRONG] to boot up multiple (up to `process.env.WEB_CONNCURENCY`) servers.

`throng` is just a layer over node's `cluster` library. Each request is distributed to the pool evenly, based on busy-ness.

`connect` is interacted with via the `use()` function, which takes a function and waits for a incoming HTTP request. The function is invoked for each request received. The `IncomingMessage` object contains data about the HTTP request. The `ServerResponse` is a object with side-effect mutation functions. When you call `end()` it will write the argument to the body and close the connection.

Our framework comes in as the `funnel()` function, getting passed to `use()`, and eventually ending the request internally. It returns a `ServerResponse` object, but `use()` ignores return values.

[NPMCONNECT]: https://npmjs.com/package/connect
[NPMTHRONG]: https://npmjs.com/package/throng
