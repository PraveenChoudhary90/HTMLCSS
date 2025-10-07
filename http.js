// Load the built-in HTTP module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js HTTP server!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


// 🧠 What is a Middleware?
// ✅ Definition:

// A middleware in Express.js is a function that has access to the request (req), response (res), and the next function (next) in the application’s request-response cycle.

// It can:

// Modify the req and res objects

// End the request-response cycle

// Call the next() function to move to the next middleware or route

const express = require('express');
const app = express();

// 🔹 Custom middleware (applies to every request)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next handler
});

app.get('/', (req, res) => {
  res.send('Hello from home route');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
