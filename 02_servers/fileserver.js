import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      return res.end("failed to load file data");
    }
    res.end(data);
  });
});

const port = 3000;

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(
    `server running on port ${port}  http.js:16  custom.js:16`,
  );
});
