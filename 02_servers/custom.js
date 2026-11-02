// server is a computer system which accept the user request and as per user request it will respond with necessary action

import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1> hello from server</h1>");
});

const port = 5001;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server running on port ${port}  http.js:16 - custom.js:16`);
});
