import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("hello from server");
});

const port = 5002;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on ${port} - server.js:16`);
});
