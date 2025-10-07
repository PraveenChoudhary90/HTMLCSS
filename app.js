// Node.js is:

// A runtime environment that allows JavaScript to run outside the browser, usually on servers.

// Built on Google Chrome’s V8 engine.

// Lets you use JavaScript for backend development (like creating APIs, working with files, databases, etc.)
const http = require('http');

http.createServer((req, res) => {
  res.write('Hello from Node.js!');
  res.end();
}).listen(3000);
